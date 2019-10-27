CREATE TABLE products (
    pid INTEGER AUTO_INCREMENT,
    name TEXT NOT NULL,
    species TEXT NOT NULL,
    category TEXT NOT NULL, 
    gender TEXT NOT NULL, 
    sale BINARY, 
    price FLOAT,
    description TEXT,
    stock INTEGER,
    pic IMAGE,
    PRIMARY KEY(pid)
);

/*  NEXT: GREEN GUMDROP DUDE
    category : Ice Cream, fruit, candy, pudding, bakedGoods, chocolate, drink
    gender: F/M/None
    sale : 0(=False)/1(True) 
    */

INSERT INTO products(name, species, category,gender, sale, price, description, stock) VALUES
("Ann","Ice Cream","Ice Cream","F",0,49.99,"Ann is a Candy Person who runs the Candy Drugstore. She looks like a pink ice cream scoop on top of a darker pink ice cream scoop on top on an ice cream cone. She wears a name tag on the left side of her chest which says 'Ann'.",1), 
("Banana Guards","Chocolate Covered Banana Popsicles","Fruit", "M",0,4.99,"Banana Guards are either Guard, Police, Firefighter or Army members. The Banana Guards wear armor that has them look like cut bananas with chocolate poured on top, along with some pieces of what appears to be sugar. They are taller than most characters as displayed when they tower over Princess Bubblegum. Their feet are popsicle sticks and they hold long bronze sticks topped with diamond-shaped gems that have similar color to the sugar like cubes on their head. While they look like popsicles, they are actually bananas that have popsicle stick legs. ",20),
("Blueberry Cops","Blueberry Candy","Fruit","M",0,9.99,"The Blueberry cops are Policemen. All of them have a different nuance of blue and wear police caps.",10),
("Braco", "Banana Popsicle Mutant","Fruit","M",1,0.99,"Braco has light yellow skin and light brown hair with sugar cubes in it. He wears a yellow T-shirt with a slight, thin line down the middle. He also wears brown pants and black boots. His appearance is reminiscent of that of the Banana Guards but in a more humanoid form. 
Braco transformed into an ugly monster after making a deal with the demon Ogdoad, with half of his features enlarging. In exchange, Ogdoad put a spell making him desirable to any that looked at him.",1),
("Butterscotch Butler","Buttersctoch Candy","Candy","M",0,19.99,"Butterscotch Butler is a Butler.",1),
("Buck Pudding","Pudding","Pudding","M",0,4.99,"Buck Pudding is a Candy Person who owns Pudding's Hardware.",1),
("Candy Baby","Candy","Candy","None",0,2.99,"Candy Baby is light green and shaped like candy corn. It is wrapped in white cloth.",5),
("Candy Cane Guy","Candy Cane","Candy","M",0,1.99,"He resembles a large candy cane wearing a brown fedora. In most appearances, he has light and dark green stripes.",1),
("Candy Corn Rats","Candy Corn","Candy","None",1,1.49,"They are living candy corn that are horizontal and have rat-like features. They have black eyes and small ears. Their head is near the point and their orange noses are at the tip. Their front legs are orange and their hind legs are yellow. They also have small, thin yellow tails.",20),
("Candy Kids","Candy","Candy","None",0,2.99,"",15),
("Candy Mother","Candy","Candy","F",0,4.99,"",1),
("Candy Nanny","Candy","Candy","F",1,1.99,"The Candy Nanny is a Candy Person who watches over the Candy Kids. She is an elderly Candy Person who lacks both arms and legs. Her body is a greenish gray and is covered with paint splatters from the Candy Kids. Her eyes are closed, and she has slight wrinkles on her face. She has mostly short, white hair, but the hair on the right side of her head is brown (possibly because one of the Candy Kids painted it).",1),
("Wafer Guy","Wafer","Baked Good","M",0,9.99,"The Wafer Guy is one of the Candy People at the Candy Kingdom Talent Show in 'Five Short Graybles.' Wafer looks like a wafer with a white filling of some sort. His legs are striped yellow and orange, while the majority of his body is yellow with a darker yellow frosting on one side. He wears a tuxedo and a small top hat. He also has a magic wand in his right hand and two cards in his left, customary of the traditional magician outfit.",1),
("Green Gumdrop Dude","Gumdrop","Candy","M",0,1.99,"He is green, hence his name, and has light-green sparks on parts of his body. His skeleton looks a little like a human's skeleton, but with an oddly shaped head and abnormally wide ribs.",1),
("Uncle Chewy","Candy Zombie","Candy","M",1,0.99,"Uncle Chewy is a Candy Zombie. He is a cylindrical blue-green Candy Person with light-blue frosting as his head. He has two teeth sticking out of his mouth when it is open. He has chocolate cubes sticking out of the frosting on top of his head and on his body, which are aligned to look like buttons.",1),
("Jam Jam","Chocolate Ball with white cream","Chocolate","M",0,4.99,"Jam Jam looks like a round piece of chocolate with white cream of some sort on top, similar to a typical malt ball candy, with a purple and pink striped party hat on his head.",1),
("Candy Corn Grandma","Candy Corn","Candy","F",1,1.99,"",1),
("Candy Heart","Candy Heart","Candy","M",0,4.99,"He is a blue candy sugar heart with the words 'Tug Me' on him, which is ironic since candy hearts usually sport positive phrases like 'Hug me'.",1),
("Mr. Cream Puff","Cream Puff","Baked Good","M",0,9.99,"He looks like a cream puff, hence his name. He has chocolate on the top of his head, and wears a sailor hat. Like a cream puff, he is probably filled with cream or ice cream. He, like many other candy people, has long arms (longer than his body) and short legs.",1),
("Ice Cream Lady","Ice Cream","Ice Cream","F",0,1.99,"Ice Cream Lady resembles three upside-down scoops of vanilla, strawberry, and chocolate ice cream from top to bottom. The scoops aren't shaped normally; her body is segmented into her head and torso of vanilla and bottom and legs of chocolate, with strawberry connecting the two segments. She has a waffle cone for a hat. The chocolate portion of her ice cream is closer in color to black than brown.",1),
("Caramel Apple","Caramel Apple","Fruit","M",0,4.99,"He is a Caramel covered Apple.",1),
("Grape Popsicle Guy","Grape Popsicle","Ice Cream","M",0,2.49,"He looks like a light-purple popsicle with a bite taken out of him. His feet are two popsicle sticks.",1),
("Chocoberry","Strawberry covered with chocolate","Fruit","F",0,1.99,"Chocoberry is a strawberry with four leaves sticking on the top, her stem in the middle of her head. Her head is covered with melted chocolate until her chest, and she wears pink sandals with long knee high socks.",1),
("Kenneth","Donut","Baked Good","M",0,4.99,"Kenneth looks like a pink-frosted donut with rainbow sprinkles only in 'Five Short Graybles' and looks like a cream-frosted donut with rainbow sprinkles. His arms are at the side of the donut and his face is on the front of the frosting.",1),
("Jawbreaker dude","Jawbreaker","Candy","M",0,1.99,"Jawbreaker dude is a mostly purple Humanoid with with a partially licked head",1),
("Root Beer Guy","Root Beer","Drink","M",0,6.99,"Root Beer Guy looks like a generic root beer float, with a face full of root beer and vanilla ice cream on his head. A drinking straw protrudes from the ice cream. His face is surrounded by glass, and he wears a red suit with red- and white-striped arms and legs similar to the drinking straw. ",1),
("Mr.Cupcake","Cupcake","Baked Good","M",0,4.99,"Mr. Cupcake appears to be physically fit. He has tiny white eyes, a brown mustache, a pink nose, orange arms and legs, and brown eyebrows. He's covered with vanilla frosting and has a few blue sprinkles on top of him. He wears only a blue foil wrapper, which covers his chocolate body.",1),
("Pink Bubblegum Bubble","Bubble Gum Bubble","Candy","M",0,1.99,"He looks like a pink bubblegum sphere with thin arms and legs",1),
("Chocolate Covered Banana","Chocolate Covered Banana","Fruit","F",0,2.99,"Chocolate Covered Banana looks like a regularly peeled banana with chocolate topping from her head to her arms. She has an upside down strawberry on her head. The strawberry is slightly covered in chocolate. Her arms and legs are both parts of her banana body.",1),
("Candy Person 4","Twinkie","Baked Good","None",0,1.99,"He looks like a Twinkie with wrapper shorts. He also has frosting covering his head along woth a purple candle.",1),
("Gingerbread Pat","Gingerbread","Baked Good","M",0,4.99,"He is a cookie with a pink-buttoned red suit. He wears a red-striped, green hat on his short, messy, vanilla white hair. His nose is a red oval and he has pink cheeks. His mouth has wrinkles on each side.",1),
("Sugar Cube","Sugar Cube","Candy","M",0,0.99,"Sugar Cube has four faces (one on each side except the top and bottom) and wears a cowboy hat and boots. His body is a typical sugar cube, and he also has sparkles on each side",1),
("Chocolate Bar Guy","Chocolate Bar","Chocolate","M",0,1.99,"",1),
("Lollipop Girl","Lollipop","Candy","F",0,1.99,"She has green skin and very short, bobbed brown hair. Her eyes are U-shaped with long eyelashes when shut, and black, circular dots with two eyelashes pointing out at the sides when opened. She also has a green collar, presumably resembling the knot of a lollipop wrapper. She wears a green shirt, a skirt, with dark green boots and sash belt. She is very thin.",1),
("Chocolate Rabbit Guy","Chocolate Rabbit","Chocolate","M",0,2.99,"Despite being a chocolate rabbit, his ears are melted to the front of his head making him ressemble a duck. Because he is melted he is physically deformed giving him a bent arm and an unusually thick leg.",1),
("Charlie","Ice Cream","Ice Cream","M",0,9.99,"He is the bartender at the Candy Tavern. Charlie appears to be a dark green upside-down ice cream cone with little stubs of hair on his face and back. His cone acts as a hat and his body segments get bigger lower on his body",1),
("Captain Banana Guard","Chocolate covered Banana Popsicles","Fruit","M",0,9.99,"Captain Banana Guard resembles a regular guard, only with a few differences. He has a chocolate mustache and is topped with whipped cream instead of sugar cubes.",1),
("Cherry Cream Soda","Cherry Cream Soda Float","Drink","F",0,4.99,"Cherry Cream Soda is an attorney.",1),
("Christopher the Honorary Banana Guard","Banana Popsicle","Fruit","M",0,19.99,"Christopher is a Banana Guard who does not have any banana peel on his head and arms. He has brown hair and a navy-colored badge with a crown on it on his body with a long strap under the badge. His spear is slightly different than a regular Banana Guard's spear.",1),
("Cinnamon Bun","Cinnamon Bun","Baked Good","M",0,4.99,"Cinnamon Bun resembles a large brown bun that has a gooey face due to being half-baked. He has small black eyes and his mouth is misshapen and full of crooked teeth.",1),
("Colonel Candy Corn","Candy Corn","Candy","M",1,1.99,"Colonel Candy Corn's body is like a conjoined piece of candy corn. A large piece turned upside down is his body, and at the edge of that facing upwards is the candy corn that is his face. He has a gray, hairy mustache, as well as hair at the side of his head indicating he is bald. He is a bit bumpy and wears a medal. He also walks with a cane.",1),
("Cotton Candy Princess","Cotton Candy","Candy","F",0,99.99,"Cotton Candy Princess is less proportionate than the majority of humanoids in The Land of Ooo, as her head is larger than her torso and limbs together. This is further accentuated by her copious amount of hair, which is pink cotton candy. She appears to be short compared to Billy, but considering that he is much taller than other characters, she may be of normal height. She wears a long-sleeved purple dress with mauve detail and a gold crown with a red gem encrusted in it similar to many other princesses of Ooo",1),
("Crunchy","Cookie","Baked Good","M",0,4.99,"Crunchy used to be a candy ball. Now he is more similar to a chocolate chip cookie. Crunchy has an impressively deep and scratchy voice, which makes him sound kind of like a gruff old man.",1),
("Dr. Dextrose","Marshmellow","Candy","M",0,14.99,"Dr. Dextrose resembles a marshmallow wearing a suit and has rouge hair. Like most doctors in Ooo, he has a Scientific Parasite living in his coat pocket, which is a little creature that feeds on 'smart brain waves.'",1),
("Dr. Ice Cream","Ice Cream","Ice Cream","M",0,14.99,"Dr. Ice Cream is a Candy Person who is one of the main medical practitioners in the Candy Kingdom and the personal doctor of Princess Bubblegum. Dr. Ice Cream looks like a regular soft-serve ice cream cone. Her 'hair' is chocolate soft-serve ice cream (and a little appears to be dripping) and her body is a standard ice cream cone, though the bottom is longer than usual. She wears a white lab coat, and appears to have a small blue horse in her front pocket, which is a parasite that feeds off smart brain waves.",1),
("Dr. J","Ice Cream","Ice Cream","M",0,14.99,"Dr. J appears to be a blue berry ice cream with a blue tinted waffle cone. He wears blue and teal high-top shoes with the letter 'J' on them",1),
("Gelatin Man","Pudding","Pudding","M",0,1.99,"He is a giant lime-green gelatin person that is large enough to catch a train. He also has large green eyes and his body is in the shape of a gelatin mold.",1),
("Gingerbread Muto","Gingerbread","Baked Good","M",0,2.99,"Gingerbread Muto has two red buttons and one blue button on his chest. He also has white lines all over his body presumably marking a shirt, collar, pants, and shoes. He has short, straight dark brown hair that has bangs and goes to the side.",1),
("Gingerbread Pen","Gingerbread","Baked Good","M",0,2.99,"He has the basic appearance of a gingerbread man, in addition to a nose to hold his glasses, white hair (or icing), and what look like baggy trousers, And he has three light purple buttons on his chest.",1),
("Gingerbread Cookie","Gingerbread","Baked Good","F",0,2.99,"Her hair is curlier, puffier, and a little longer than Gingerbread Muto's hair. She also wears glasses, a red and blue striped shirt (as opposed to the red and blue buttons Gingerbread Muto has), and what seem to be brown shoes.",1),
("Ice Cream Guy","Ice Cream","Ice Cream","M",0,1.99,"In 'Mystery Train', Ice Cream Guy is a waffle cone with a single scoop of mint ice cream, but in ""Go With Me"" his head is wavy strawberry ice cream, and his eyes and mouth are on the cone rather than on his ice cream. It may be that these are two distinct characters, or that Ice Cream Guy is somehow able to change the flavor of his ice cream.",1),
("Jelly Bean People","Jelly Bean","Candy","None",0,0.19,"",20),
("Justin Rockcandy","Candyrock","Candy","M",0,1.99,"Justin is a Candy Person who has the body of a an orange/brown rocky structure person. His body is translucent and he wears a blue snapback on his head.",1),
("Lemon People","Lemon","Fruit","None",0,4.99,"The Lemon People have varied appearances, resembling animals, plants, and fungi more than humanoids. They are mostly yellow and resemble lemons in some way while others are green and likely are supposed to be limes. Most of them are chubby and all of the Lemon People seen thus far have been male, with the exception of their gender-swapped continuity counterparts.",20),
("Earl of Lemongrab","Lemon","Fruit","M",0,49.99,"Earl of Lemongrab is the third Earl of Lemongrab.",1),
("Mrs. James","Wafer","Baked Good","F",0,2.99,"Mrs. James is the mother of James. Mrs. James is short and small but looks very similar to James. She wears a green and blue spotted dress.",1),
("Nurse Betsy Pound Cake","Pound Cake","Baked Good","F",0,4.99,"Nurse Pound Cake is in the shape of a square pound cake, hence her name. She is also lightly colored on all sides, indicating she has no crust. She wears a pink scrub and a white nurse's cap with a red cross on it. Nurse Pound Cake is also fairly short, and appears to be missing a couple of her front teeth.",1),
("Peppermint Butler","Peppermint Candy","Candy","M",0,19.99,"Peppermint Butler, as his name suggests, is a peppermint candy. He wears the traditional tailcoat of a butler but opts for the less traditional blue version of the outfit. His shoes, gloves, and bow-tie are red, matching his red stripes. Peppermint Butler's eyes are white.",1),
("Starchy","Chocolate Malt Ball","Chocolate","M",0,1.99,"Starchy resembles a chocolate malt ball and a potato. He has a long, thick brown mustache and wears a blue janitor's hat. Unlike most Adventure Time characters', Starchy's eyes appear to be perfect circles. Starchy is also one of a few characters to have eyebrows.",1),
("Taffy Girl","Taffy","Candy","F",0,2.99,"Taffy Girl's is similar in shape to an alpaca. However, she has white strips of taffy covering her body instead of fur. She has eyes that are similar to Jake's and Lady Rainicorn's, although Taffy Girl's are not quite as big.",1),
("Wormo","Gummy Worm","Candy","M",0,0.99,"He is a long gummy-worm with yellow, green, pink, and blue segments. He normally holds his head upside-down.",1);

CREATE TABLE customers(
    cid INTEGER AUTO_INCREMENT,
    email TEXT NOT NULL,
    password TEXT NOT NULL,
    firstname TEXT NOT NULL,
    surname TEXT NOT NULL,
    adress TEXT NOT NULL,
    zip INTEGER,
    city TEXT NOT NULL,
    country TEXT NOT NULL,
    PRIMARY KEY(cid)
);

INSERT INTO customers(email,password,firstname,surname,adress,zip,city,country) 
VALUES("test@accounts","blub","test","testermann","blubstreet 1",12345,"testcity","testcountry");

CREATE TABLE orders(
    customer INTEGER,
    productId INTEGER,
    amount INTEGER,
    FOREIGN KEY(customer) REFERENCES customers(cid),
    FOREIGN KEY(productId) REFERENCES products(pid)
);

INSERT INTO orders(customer,productId,amount) VALUES(1,1,1),(1,2,1);
