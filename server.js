// Initialisierung bodyParser etc.
const express = require('express');
const app =  express();
const bcrypt = require('bcrypt');


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

app.engine('.ejs', require('ejs').__express);
app.set('view engine','ejs');


const cookieParser = require('cookie-parser');
app.use(cookieParser());


const session = require('express-session');
app.use(session({
    secret: 'example',
    resave: false,
    saveUninitialized: true
}));
//
app.listen(3000, function(){
    console.log('listening on 3000');
});

// Verbindung zur Datenbank
const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('shop.db', function(err) {
    if (err) { 
        console.error(err); 
    } else {
        console.log("Verbindung zur Datenbank wurde erfolgerich hergestellt.")
    }
});
//
//Ausgabe des Registrieren Formulars
app.get('/register', function(req, res){
    res.render('register');
});
//Ausgabe des Login Formulars
app.get('/login', function(req, res){
    res.render('login');
})

//Loginauswertung Problem:abbruch/error wenn user nicht in der datenbank existiert....
app.post('/doLogin', function(req, res){
    const email = req.body.email;
    const password = req.body.password;
    let sql2= `SELECT email FROM customers`
    db.all(sql2,function(err,row){
        valid=false;
        for(i=0; i<row.length;i++){
            if(email==row[i].email){
                valid=true;
            }
        }
        if(valid==true){
            let sql = `SELECT * FROM customers WHERE email="${email}"`;
            db.get(sql,function(err,row){
                 req.session.email = row.email;
                if (bcrypt.compareSync(password,row.password)){
                    req.session["sessionVariable"]= "ist angemeldet";
                    req.session["user"] = row.firstname +" "+ row.surname;
                    req.session["firstname"] = row.firstname ;
                    req.session["surname"] = row.surname ;
                    req.session["address"] = row.address ;
                    req.session["zip"] = row.zip ;
                    req.session["country"] = row.country ;
                    req.session["email"] = row.email ;
                    res.redirect("/"); 
                }
                else {
                    res.render('false',{"message":"Wrong Password"})
                };
            })
        }
        else{
            res.render('false',{"message":"Account doesn't exist"})
        }
    })

    
    
    

});


//Session abbrechen zum ausloggen
app.get("/logout", function(req, res){
    delete req.session["sessionVariable"];
    delete req.session["user"];
    res.redirect("/");
});

//Anzeigen von Produktseiten mit Kategorien etc.
app.get("/products", function(req, res){
    let sql = "SELECT * FROM products";
    db.all(sql, function(err, rows){
      res.render('products', {shop: rows});
    })
});

app.get("/products/bakedGoods", function(req, res){
    let sql = "SELECT * FROM products";
    db.all(sql, function(err, rows){
      res.render('bakedGoods', {shop: rows});
    })
    
});

app.get("/products/candy", function(req, res){
    let sql = "SELECT * FROM products";
    db.all(sql, function(err, rows){
      res.render('candy', {shop: rows});
    })
    
});

app.get("/products/chocolate", function(req, res){
    let sql = "SELECT * FROM products";
    db.all(sql, function(err, rows){
      res.render('chocolate', {shop: rows});
    })
    
});

app.get("/products/drinks", function(req, res){
    let sql = "SELECT * FROM products";
    db.all(sql, function(err, rows){
      res.render('drinks', {shop: rows});
    })
    
});

app.get("/products/fruits", function(req, res){
    let sql = "SELECT * FROM products";
    db.all(sql, function(err, rows){
      res.render('fruits', {shop: rows});
    })
    
});

app.get("/products/iceCream", function(req, res){
    let sql = "SELECT * FROM products";
    db.all(sql, function(err, rows){
      res.render('iceCream', {shop: rows});
    })
    
});
app.get("/products/pudding", function(req, res){
    let sql = "SELECT * FROM products";
    db.all(sql, function(err, rows){
      res.render('pudding', {shop: rows});
    })
    
});

app.get("/female", function(req, res){
    let sql = "SELECT * FROM products";
    db.all(sql, function(err, rows){
      res.render('female', {shop: rows});
    })
    
});

app.get("/male", function(req, res){
    let sql = "SELECT * FROM products";
    db.all(sql, function(err, rows){
      res.render('male', {shop: rows});
    })
    
});

app.get("/androgynous", function(req, res){
    let sql = "SELECT * FROM products";
    db.all(sql, function(err, rows){
      res.render('androgynous', {shop: rows});
    })
    
});

app.get("/sale", function(req, res){
    let sql = "SELECT * FROM products";
    db.all(sql, function(err, rows){
      res.render('sale', {shop: rows});
    })
    
});
//
//Suchleiste , Datenbank tabelle Products wird nach dem Wort abgesucht und die zeilen dazu ausgegeben
app.post('/search',function(req,res){
    const search= req.body.search;

    let sql = `SELECT * FROM products WHERE name LIKE '%${search}%'
    OR species LIKE '%${search}%'
    OR category LIKE '%${search}';`
    db.all(sql, function(err,rows){
            res.render('search',{shop: rows});
        
    })
});


//Auswertung nach der Registrierung

app.post('/doRegister', function(req, res) {
    const firstname = req.body.firstname;
    const surname = req.body.surname;
    const address = req.body.address;
    const zip = req.body.zip;
    const city = req.body.city;
    const country = req.body.country;   
    const email = req.body.email;
    const password = req.body.password;
    const confirm = req.body.confirm;

    let hash = bcrypt.hashSync(password,10);
    let sql2=`SELECT email FROM customers;`
    db.all(sql2,function(err,row){
        var validy=false;
        for(i=0;i<row.length;i++){
            if(email==row[i].email){
                validy=true;
            }
        }
        if(validy==true){
            
        }
        else{
            if(password==confirm){
                //SQL Befehl um einen neuen Eintrag der Tabelle user hinzuzufügen
                let sql = `INSERT INTO customers (firstname,surname, address, zip, city, country, email, password) VALUES ("${firstname}","${surname}","${address}", ${zip} ,"${city}","${country}","${email}", "${hash}");`
                
                db.run(sql, function(err) {
                    if (err) { 
                        console.error(err)
                    } else {
                        res.render('home',{"message":"Congratulation you are a member now!"});
                    }
                })
            }
            else {
                res.render('registerfalse',{"message": "Passwords don't match"})
            }
            
        }
    })
        

    
    

});
//Auswertung Session und Anzeigen von Startseite mit der dazu gehörigen Nachricht
app.get("/", function(req, res){
    console.log(req.session);
    if (!req.session["sessionVariable"]){
    res.render("home", {"message":"Welcome to Candy Kingdom!"}
);
    
    }
    else {
        const user = req.session["user"];
        res.render("home", {
            "message":"Welcome "+ user
        });
    }
});

//Anzeigen von meinKonto bzw umleiten zum login, wenn nicht angemeldet
app.get("/MyAccount", function(req, res){
    console.log(req.session);
    if (!req.session["sessionVariable"]){
    res.redirect("/login");
    
    }
    else {
        res.redirect("/AccountSummary")
    }
});
//anzeigen der Account daten wenn Kunde angemeldet
app.get("/AccountSummary", function(req, res){
    console.log(req.session);
    const user = req.session.user;
    const email = req.session.email;

    let sql = `SELECT * FROM customers,ordered_items, orders, products WHERE orders.cid=customers.cid AND ordered_items.order_id=orders.order_id AND ordered_items.product_id=products.pid AND email="${email}";`

    db.all(sql, function(err,rows){
        res.render('account',{shop: rows});
    })
});

//Adressänderung link
app.get('/changeAddress', function(req, res){
    res.render('address');
});

//änderung in datenbank nach abschicken des formulars
app.post('/changeIt', function(req, res) {
    console.log(req.session);
    const email = req.session.email;

    const firstname = req.body.firstname;
    const surname = req.body.surname;
    const address = req.body.address;
    const zip = req.body.zip;
    const city = req.body.city;
    const country = req.body.country;   


    let sql = `UPDATE customers SET firstname="${firstname}", surname="${surname}",address="${address}", zip=${zip}, city="${city}", country="${country}" WHERE email="${email}";`
        
    db.run(sql, function(err) {
        if (err) { 
            console.error(err)
        } else {
             res.render('home',{"message":"Your Account was updated!"});
        }
    })
    


});


//Shopping cart stuff  : 
// '/addCart' after pressing on button <add to cart> 
// !- need to figure out how to tell sql which product to add
app.post('/addCart', function(req, res){
    const pid = req.body.pid;
    const name= req.body.name;
    const price= req.body.price;
    const quantity= req.body.quantity;
    let sql2=`SELECT serialNumber from cart`

    db.all(sql2, function(err,row){
        var alr=false;
        for(i=0;i<row.length;i++){
            if(pid==row[i].serialNumber){
                alr=true;
            }
        }
        if(alr==true){
            let sql= `UPDATE cart SET amountProduct=amountProduct+${quantity}, subTotal=subTotal+${quantity}*${price} WHERE serialNumber=${pid};`
            db.run(sql, function(err) {
                if (err) { 
                    console.error(err)
                } else {
                    res.render('addcart');
                }
            })
        }
        else{
            let sql = `INSERT INTO cart(productName,serialNumber,unitPrice,amountProduct,subTotal) VALUES("${name}",${pid},${price},${quantity},${price}*${quantity});`
            db.run(sql, function(err) {
                if (err) { 
                    console.error(err)
                } else {
                    res.render('addcart');
                }
            })
        }
    })
    
    

});

//warenkorb anzeigen
app.get("/shoppingCart",function(req,res){
    let sql=`SELECT products.pic,products.stock,cart.* FROM products,cart WHERE cart.serialNumber=products.pid`;

    db.all(sql, function(err,rows) {
        if (err) { 
            console.error(err)
        } else {
            total=0;
            for(i=0; i<rows.length;i++){
                total+=rows[i].subTotal; 
            }
            x=total.toFixed(2)
            res.render('cart',{shop:rows,grand:x});
        }
    })
});

//produkt aus Warenkorb entfernen
app.post('/removeFromCart', function(req, res){
    const serialNumber = req.body.serialNumber;

    let sql = `DELETE FROM cart WHERE serialNumber=${serialNumber};`
            db.run(sql, function(err) {
                if (err) { 
                    console.error(err)
                } else {
                    res.redirect('/shoppingCart');
                }
            })
});

// Checkout-Prozess
app.get('/payment', function(req, res){
    console.log(req.session);
    if (!req.session["sessionVariable"]){
    res.redirect("/login");
    
    }
    else {
        res.render('payment');
    }
});
app.get('/checkout', function(req, res){

    console.log(req.session);
    const user = req.session.user;
    const email = req.session.email;
    const firstname = req.session.firstname;
    const surname = req.session.surname;
    const address = req.session.address;
    const zip = req.session.zip;
    const city = req.session.city;
    const country = req.session.country;

    let sql = `SELECT * FROM customers WHERE email="${email}";`
    db.all(sql, function(err,rows){
        res.render('checkout',{shop: rows});
    });   
});

app.get('/orderSuccess', function(req, res){
    console.log(req.session);
    const user = req.session.user;
    const email = req.session.email;

    // neue Order-ID generieren
    let sql3 = `SELECT email,cid FROM customers`
    db.all(sql3, function(err,rows) {
        if (err) { 
            console.error(err)
        } else {
            for(i=0;i<rows.length;i++){
                if(email==rows[i].email){
                    cid2 = rows[i].cid;
                    let sql4 = `INSERT INTO orders(cid) VALUES("${cid2}")`
                    db.run(sql4)  
                }        
            }
        }
        res.redirect('/finish')
    }) 
})

app.get('/finish',function(req,res){
    console.log(req.session);
    const user = req.session.user;
    const email = req.session.email;
    let sql = `SELECT order_id from orders`
    db.all(sql,function(err,row){
        for(i=row.length-1;i<row.length;i++){
            orderid = row[i].order_id;
            let sql6 = `insert into ordered_items(order_id,product_id,quantity,totalprice) select ${orderid},cart.serialNumber,cart.amountProduct,cart.subTotal from cart;`
            db.all(sql6, function(err,rows){
                sql2 = `SELECT orders.order_id FROM customers,orders WHERE customers.email="${email}" AND orders.cid=customers.cid;`
                db.all(sql2, function(err,rows){
                    // Warenkorb löschen
                    let sql3 = `DELETE FROM cart;`
                    db.run(sql3)
                    // Order-Nr anzeigen
                    res.render('orderSuccess',{orderid});
                })
            })    
        }           
    });
});


//update Anzahl von Produkten in Warenkorb
app.post('/update', function(req, res){
    const serialNumber = req.body.serialNumber;
    const quantity = req.body.quantity;
    const price = req.body.price;

    let sql = `UPDATE cart SET amountProduct=${quantity}, subTotal=${quantity}*${price} WHERE serialNumber=${serialNumber};`
            db.run(sql, function(err) {
                if (err) { 
                    console.error(err)
                } else {
                    res.redirect('/shoppingCart');
                }
            })
});


