# cli-ml-tools
A mini cli tool to summarize text and get sentiment scores using pre-trained Machine Learning models.
The pipeline runs in the browser and does not rely on an external server.

```

        _   _                                                          _              
   ___  | | (_)    ___   _   _   _ __ ___    _ __ ___     __ _   _ __  (_)  ____   ___ 
  / __| | | | |   / __| | | | | | '_ ` _ \  | '_ ` _ \   / _` | | '__| | | |_  /  / _ \
 | (__  | | | |   \__ \ | |_| | | | | | | | | | | | | | | (_| | | |    | |  / /  |  __/
  \___| |_| |_|   |___/  \__,_| |_| |_| |_| |_| |_| |_|  \__,_| |_|    |_| /___|  \___|
                                                                                       
Usage: mycli [OPTIONS]...

An mini-CLI for summarizing text input

Options:
  -V, --version           output the version number
  -s, --summarize <text>  create summary of text input
  -S, --score <text>      create sentiment score of text input
  -h, --help              display help for command
  
  ```
  
## How it works
Uses transformer.js library to build a pipeline on a pre-trained and host models from huggingface.co.
The first run for a summarization or classification will take a couple of seconds as the model is compiling but speeds up on subsequent runs.

## Set-up locally:

`git checkout master`

`git pull`

`npm ci`

`npm run global`

To get summarization:
`sum-cli -s "Apple has filed an appeal to the International Trade Commission’s decision to ban U.S. sales of Watch Series 9 and Watch Ultra 2 models, court records show. Additionally, the company is requesting an emergency stay on the ban for at least two weeks until a decision is made on redesigned versions of the banned models. “We strongly disagree with the USITC decision and resulting exclusion order, and are taking all measures to return Apple Watch Series 9 and Apple Watch Ultra 2 to customers in the U.S. as soon as possible,” Apple said in a statement to Reuters on Tuesday. Apple did not immediately respond to The Verge’s request for comment."`

To get sentiment score: 
`sum-cli -S "I love coding"`
