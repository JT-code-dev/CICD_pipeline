import models from '../models/index.js';
import db from '../config/connection.js';

// Define valid model names as a union type
type ModelName = 'Question'; // Add more model names here if needed

// Main function
export default async function cleanDb(modelName: ModelName, collectionName: string): Promise<void> {
  try {
    const model = models[modelName];

    // Safely check if model exists before accessing properties
    if (!model || !model.db || !model.db.db) {
      throw new Error(`Model '${modelName}' is not defined or does not have a database connection.`);
    }

    const modelExists = await model.db.db.listCollections({
      name: collectionName
    }).toArray();

    if (modelExists.length) {
      await db.dropCollection(collectionName);
    }
  } catch (err) {
    throw err;
  }
}
