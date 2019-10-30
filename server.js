// Initialisierung der Moduke
const express = require('express');
const app =  express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

app.engine('.ejs', require('ejs').__express);
app.set('view engine','ejs');

//Initialisierung des Cookie Parsers
const cookieParser = require('cookie-parser');
app.use(cookieParser());

//Initialisierung von express-sessions
const session = require('express-session');
app.use(session({
    secret: 'example',
    resave: false,
    saveUninitialized: true
}));

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

//Ausgabe des Registrieren Formulars
app.get('/register', function(req, res){
    res.render('register');
});
//Ausgabe des Login Formulars
app.get('/login', function(req, res){
    res.render('login');
})

app.get('/hello', function(req, res){
    res.render('hello', { 
        email: req.session.email
    })
});

app.post('/doLogin', function(req, res){
    const email = req.body.email;
    const password = req.body.password;

    let sql = `SELECT * FROM customers WHERE email="${email}"`;
    db.get(sql,function(err,row){
        req.session.email = row.email;
        if (password==row.password){
            req.session["sessionVariable"]= "ist angemeldet";
            req.session["user"] = row.firstname +" "+ row.surname;
            res.redirect("/getHome"); 
        }
        else {
                res.render('false')
        };
    })
    

});



app.get("/logout", function(req, res){
    delete req.session["sessionVariable"];
    delete req.session["user"];
    res.redirect("/getHome");
});

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


//Auswertung nach der Registrierung
app.post('/doRegister', function(req, res) {
    const firstname = req.body.firstname;
    const surname = req.body.surname;
    const adress = req.body.adress;
    const zip = req.body.zip;
    const city = req.body.city;
    const country = req.body.country;   
    const email = req.body.email;
    const password = req.body.password;
    const confirm = req.body.confirm;

    if(password==confirm){
            //SQL Befehl um einen neuen Eintrag der Tabelle user hinzuzufügen
        let sql = `INSERT INTO customers (firstname,surname, adress, zip, city, country, email, password) VALUES ("${firstname}","${surname}","${adress}",${zip}","${city}","${country}","${email}", "${password}");`
        
        db.run(sql, function(err) {
            if (err) { 
                console.error(err)
            } else {
                res.render('newmember');
            }
        })
    }
    else {
        console.error(err)
    }


});

app.get("/getHome", function(req, res){
    console.log(req.session);
    if (!req.session["sessionVariable"]){
    res.render("home", {
        "message":"Welcome to Candy Kingdom!"
    });
    
    }
    else {
        const user = req.session["user"];
        res.render("home", {
            "message":"Welcome "+ user
        });
    }
});

app.get("/MyAccount", function(req, res){
    console.log(req.session);
    if (!req.session["sessionVariable"]){
    res.render("login");
    
    }
    else {
        const user = req.session["user"];
        res.render("account", {
            "message":"Welcome " +user
        });
    }
});