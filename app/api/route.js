import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    try {
      const client = await MongoClient.connect('mongodb+srv://kulkarnianushree21:JH9RJOFxzS4BnVA1@cluster0.uaiwy.mongodb.net/todos?retryWrites=true&w=majority&appName=Cluster0');

      const db = client.db();
      const result = await db.collection('todos').insertOne(data);
      console.log(result)
      res.status(201).json({ message: 'TODO created!', todo: { id: result.insertedId, title, description, date } });
    } catch (error) {
      res.status(500).json({ message: 'Could not insert data' });
    } finally {
      if (client) client.close();
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

export default handler;
//export async function POST(request) {
//  const { title, description } = await request.json();

//  try {
     
//   } catch (error) {
//       return new Response(JSON.stringify({ error: error.message }), { status: 500 });
//   }
// }
