from enum import Enum


class HTTP_STATUS(Enum):
    OK = 200
    BAD_REQUEST = 400
    NOT_FOUND = 404
    PRECONDITION_FAILED = 412
    INTERNAL_SERVER_ERROR = 500
    UNAUTHORIZED = 401