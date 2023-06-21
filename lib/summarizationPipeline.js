import { pipeline } from '@xenova/transformers';

export default class SummarizationPipeline {
  static instance = null;

  static async getInstance(progress_callback = null) {
    if (this.instance === null) {
      this.instance = pipeline("summarization", null, { progress_callback });
    }
    return this.instance;
  }
}