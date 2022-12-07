// CRUD create read update delete

const { MongoClient } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";

const client = new MongoClient(connectionURL);

/// FIND ONE
// async function run() {
//   try {
//     const database = client.db("instaya");
//     const orders = database.collection("orders");

//     // Query for a Order that has the recipient_city 'Smoky Lake'
//     const query = { recipient_city: "Smoky Lake" };

//     const options = {
//       // sort matched documents in descending order by delivery date
//       sort: {
//         delivery_date: -1,
//       },
//       //include only the 'delivery_date', the 'recipient_city', the 'recipient_address', the 'order_id'
//       projection: {
//         order_id: 1,
//         delivery_date: 1,
//         recipient_city: 1,
//         recipient_address: 1,
//       },
//     };
//     const order = await orders.findOne(query, options);

//     // since this method returns the matched document, not a cursor, print it directly
//     console.log(order);
//   } finally {
//     await client.close();
//   }
// }
// run().catch(console.dir);

/// FIND MULTIPLE
async function run() {
  try {
    const database = client.db("instaya");
    const orders = database.collection("orders");

    // Query for a Order that has the recipient_city 'Smoky Lake'
    const query = { recipient_city: "Smoky Lake" };

    const options = {
      // sort matched documents in descending order by delivery date
      sort: {
        delivery_date: -1,
      },
      //include only the 'delivery_date', the 'recipient_city', the 'recipient_address', the 'order_id'
      projection: {
        order_id: 1,
        delivery_date: 1,
        recipient_city: 1,
        recipient_address: 1,
      },
    };
    const cursor = orders.find(query, options);
    // print a message if no documents were found
    if ((await cursor.count()) === 0) {
      console.log("No documents found!");
    }

    // replace console.dir with your callback to access individual elements
    await cursor.forEach(console.dir);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
