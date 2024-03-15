from abc import ABC, abstractmethod


class BlobStorage(ABC):

    @abstractmethod
    def insert(self, **kwargs):
        pass

    @abstractmethod
    def delete(self, **kwargs):
        pass

    @abstractmethod
    def find_one(self, **kwargs):
        pass

    @abstractmethod
    def find(self, **kwargs):
        pass
