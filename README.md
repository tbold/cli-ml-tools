# cli-ml-tools
A mini cli tool to summarize text and get sentiment scores using pre-trained Machine Learning models
summarize-texts

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
  
## Set-up locally:

`git checkout master`

`git pull`

`npm ci`

`npm run global`

To get summarization:
`sum-cli -s "Some long and complicated text here"`

To get sentiment score: 
`sum-cli -S "I love coding"`
