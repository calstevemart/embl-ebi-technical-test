
def calculate_resource_allocation(process_time_spans):
    if spans_valid(process_time_spans) is not True:
        return 0

    total_machines_needed, machines_running = 0, 0
    start_time = min(process_time_spans, key=lambda x: x[0])[0]
    end_time = max(process_time_spans, key=lambda x: x[1])[1]

    for t in range(start_time, end_time):
        for process in process_time_spans:
            if process[0] is t:
                if total_machines_needed == 0:
                    total_machines_needed += 1
                    machines_running += 1
                else:
                    machines_running += 1
                if machines_running > total_machines_needed:
                    total_machines_needed += 1

            if process[1] is t:
                machines_running -= 1

    return total_machines_needed


def spans_valid(spans):
    for process in spans:
        if process[0] > process[1]:
            return False
    return True




