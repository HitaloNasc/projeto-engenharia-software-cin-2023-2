from .error import ApplicationException


class Handler:
    def __init__(self):
        pass

    def format_response(self, status_code, data):
        formated_response = (
            {"status_code": status_code, "message": data},
            status_code,
        )
        return formated_response

    def format_error(self, err: ApplicationException):
        formated_response = (
            {"status_code": err.status_code, "title": err.title, "errors": err.errors},
            err.status_code,
        )
        return formated_response


handler = Handler()
