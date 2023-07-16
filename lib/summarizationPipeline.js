import { pipeline } from '@xenova/transformers';

export default class SummarizationPipeline {
  static instance = null;

  static async getInstance(progress_callback = null) {
    if (this.instance === null) {
      this.instance = pipeline("summarization", "Xenova/distilbart-cnn-6-6", { progress_callback });
    }
    return this.instance;
  }
}