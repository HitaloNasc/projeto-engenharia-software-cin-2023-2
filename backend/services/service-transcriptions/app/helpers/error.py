from typing import Optional, Any
from .http_status import HTTP_STATUS


class ApplicationException(Exception):
    def __init__(self, status_code: int, title: str, errors: Optional[Any] = None):
        super().__init__(title)
        self.status_code = status_code
        self.title = title
        self.errors = errors


def BAD_REQUEST(err: Optional[Any] = None):
    return ApplicationException(HTTP_STATUS.BAD_REQUEST.value, "bad_request", err)


def NOT_FOUND(err: Optional[Any] = None):
    return ApplicationException(HTTP_STATUS.NOT_FOUND.value, "not_found", err)


def PRECONDITION_FAILED(err: Optional[Any] = None):
    return ApplicationException(
        HTTP_STATUS.PRECONDITION_FAILED.value, "precondition_failed", err
    )


def INTERNAL_SERVER_ERROR():
    return ApplicationException(
        HTTP_STATUS.INTERNAL_SERVER_ERROR.value, "internal_server_error"
    )
