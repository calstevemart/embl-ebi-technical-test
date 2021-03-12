# embl-ebi-technical-test
A repo to house my solutions to the three technical tests set by the embl-ebi.

## Task 1 - Machine Resource Allocation
The solution to the first task was completed in python. It can be found in `embl-ebi-technical-test/task-1-machine-calculation/`. 
It requires a virtual environment to run, as it makes use of several 3rd party packages.
* To create a virtual environment via the terminal, navigate to 
the `embl-ebi-technical-test/task-1-machine-calculation/` project directory and run `python3 -m venv venv`. 
* To then activate your virtual environment, run `. venv/bin/activate`.
* You will then need to install the 3rd party packages. Do this by running `pip install -r requirements.txt`.

In the root project directory there is a `main.py` file. Running this will run the program with the default input time spans, 
which are `test_1 = [(0, 3), (15, 18), (17, 20), (2, 10)]
test_2 = [(7, 9), (2, 4)]`. To test the program with different time spans, you can alter (or add more like) these variables in main.py
There are also some unit tests written using [pytest](https://docs.pytest.org/en/stable/) that can be run by running `pytest` in the project directory. I also made use of the [black](https://black.readthedocs.io/en/stable/)
formatter to format the project.

## Task 2 - Data Visualisation
For the second task of visualising sets of input spectrography data, I opted to create an angular webapp. It can be found in `embl-ebi-technical-test/task-2-data-visualisation`.
It requires [Node / NPM](https://www.npmjs.com/get-npm) and the [Angular CLI](https://www.npmjs.com/package/@angular/cli) to run. Once these are installed, you will need to install the project in order to run it.
* To install the project, navigate to the `embl-ebi-technical-test/task-2-data-visualisation/` and run `npm install`. This will install all 3rd party dependencies.
* To run the project, run `ng serve` in the project directory. The UI will then be accessible at `http://localhost:4200`. The graphs view should then be immediately visible.

As part of my implementation, I refactored the SpeckTackle library `st.min.js` file so that it was compatible with current versions of d3 and jquery. This refactored file can be found in `src/assets/js/st.min.js/`.
Initial attempts at trying to get the library working out the box, or finding compatible versions of d3 and jquery, were unsuccessful.

There are also some unit tests written in [Jasmine](https://jasmine.github.io/). These can be run by running `ng test` in the project directory.

## Task 3 - Filename Sanitisation
For the third task of sanitising input filenames, I wrote a bash script that takes a filename and a location of a config file as arguments. In order to run this bash script as an executable, you will need to run `chmod +x sanitise.sh` in order
to make it executable.

To run the executable, the basic command and flag structure is `./sanitise.sh -i [input string in quotes] -c [src/of/rulefile.txt]`. The output of the bash script is echo'd to the command line.
The `-c` flag for a configuration file is optional. Not including this flag will just mean that no replacement is performed, and all illegal characters are simply removed.
You can pass a config file of your choosing to the script, `rules.txt` is supplied by default.

The structure of a config file goes like so:
`character_to_replace replacement string` with each pair on a new line, with each element in a character/replacement pair separated by a space. It is important that this space is
present between each character/replacement pair, as whitespace is the delimiter on which the script splits up each line in order to perform replacement.
