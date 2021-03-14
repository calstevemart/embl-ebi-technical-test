import re

from resource_calculator.resource_calculator import ResourceCalculator


class CalculatorService:

    @staticmethod
    def calculate_machines(request):
        time_spans = re.compile(",(?=\()").split(request["body"])
        tuples = []
        for span in time_spans:
            # strip the brackets so we can cast to a tuple
            span = span.replace("(", "")
            span = span.replace(")", "")
            new_tuple = tuple(map(int, span.split(',')))
            tuples.append(new_tuple)
        rc = ResourceCalculator(tuples)

        return rc.calculate_resource_allocation()
