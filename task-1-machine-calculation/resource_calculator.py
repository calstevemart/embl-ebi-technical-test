class ResourceAllocator:

    def __init__(self, process_time_spans):
        self.process_time_spans = process_time_spans

    def calculate_resource_allocation(self):
        if self.spans_valid(self.process_time_spans) is not True:
            return 0

        total_machines_needed, machines_running = 0, 0
        start_time = min(self.process_time_spans, key=lambda x: x[0])[0]
        end_time = max(self.process_time_spans, key=lambda x: x[1])[1]

        for t in range(start_time, end_time):
            for process in self.process_time_spans:
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

    @staticmethod
    def spans_valid(spans):
        for process in spans:
            if process[0] > process[1]:
                return False
        return True




