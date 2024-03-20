from abc import ABC, abstractmethod


class Api(ABC):
    """
    Represents a api.
    This class defines a generic interface for api classes.
    """

    @abstractmethod
    def get(self, **kwargs):
        pass

    @abstractmethod
    def post(self, **kwargs):
        pass

    @abstractmethod
    def put(self, **kwargs):
        pass

    @abstractmethod
    def delete(self, **kwargs):
        pass
