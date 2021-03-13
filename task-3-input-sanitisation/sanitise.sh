#!/bin/bash
# Bash script to sanitise input with an optional input file.
# Written by callum martin as part of the technical test set by the EMBL-EBI

# Grab the filename to be sanitised, and the config file that specifies any replacement characters.
while getopts i:c: flag
do
    case "${flag}" in
        i) inputString=${OPTARG};;
        c) config=${OPTARG};;
    esac
done

filename=$config
len=$(echo ${#filename})
# Only try to read if an argument for config has been supplied.
if [ $len -gt 0 ]
then
# Read the config file line by line
# for each rule, split it into replacee and replacement
# and then use the stream editor 'sed' utility to perform the replacement
    while read line; do
        read -a strarr <<< $line
        replacee="${strarr[0]}"
        replacement="${strarr[1]}"
        echo $replacee $replacement
        inputString=$(echo "$inputString" | sed "s/$replacee/$replacement/g")
    done < $config
fi

illegalCharacters=("#" "%" "&" "{" "}" "\\" "<" ">" "\*" "?" "/" "" "$" "!" "'" "\"" ":" "@" "\+" "\`" "|" "=")
# For each illegal character, perform the translate 'tr' delete command
# To delete any instances of that illegal character
for char in ${illegalCharacters[@]}; do
    inputString=$(echo "$inputString" | tr -d $char)
done    

lenOutput=$(echo ${#inputString})
if [ $lenOutput -gt 0 ]
then
    echo "Post sanitisation: $inputString"
else
    echo "No input filename string supplied. Basic command structure: ./sanitise.sh -i 'input string in quotes' -c rules.txt ( -c config flag optional)"
fi

