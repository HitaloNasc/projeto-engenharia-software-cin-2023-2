from abc import ABC, abstractmethod


class Usecase(ABC):
    """
    Represents a usecase.
    This class defines a generic interface for usecase classes.
    """

    @abstractmethod
    def execute(self, **kwargs):
        pass



