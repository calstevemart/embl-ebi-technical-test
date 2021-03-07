from resource_calculator import ResourceAllocator


def return_bad_test_values():
    return [(2,1)]


def test_spans_valid():
    result = ResourceAllocator.spans_valid(return_bad_test_values())
    assert result is 0
