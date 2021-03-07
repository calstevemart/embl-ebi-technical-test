from resource_calculator.resource_calculator import ResourceCalculator


test_1 = [(0, 3), (15, 18), (17, 20), (2, 10)]
test_2 = [(7, 9), (2, 4)]

ra = ResourceCalculator(test_1)
result = ra.calculate_resource_allocation()
print(
    "The total number of machines needed for process set {0} is: {1}".format(
        test_1, result
    )
)

ra = ResourceCalculator(test_2)
result = ra.calculate_resource_allocation()
print(
    "The total number of machines needed for process set {0} is: {1}".format(
        test_2, result
    )
)
