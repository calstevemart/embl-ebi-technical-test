from unittest.mock import patch
from resource_calculator.resource_calculator import ResourceCalculator

import pytest


@pytest.fixture
def bad_test_values():
    return [(2, 1)]


@pytest.fixture
def good_test_values_1():
    return [(0, 3), (15, 18), (17, 20), (2, 10)]


@pytest.fixture
def good_test_values_2():
    return [(7, 9), (2, 4)]


@patch("resource_calculator.resource_calculator.ResourceCalculator.spans_valid")
def test_calculate_resource_allocation(
    mock_spans, good_test_values_1, good_test_values_2
):
    mock_spans.return_value = True
    ra = ResourceCalculator(good_test_values_1)
    resources_needed = ra.calculate_resource_allocation()

    assert mock_spans.call_count == 1
    assert resources_needed is 2

    ra = ResourceCalculator(good_test_values_2)
    resources_needed = ra.calculate_resource_allocation()
    assert mock_spans.call_count == 2
    assert resources_needed is 1


def test_spans_valid_bad_input(bad_test_values):
    result = ResourceCalculator.spans_valid(bad_test_values)
    assert result is False


def test_spans_valid_good_input(good_test_values_1):
    result = ResourceCalculator.spans_valid(good_test_values_1)
    assert result is True
