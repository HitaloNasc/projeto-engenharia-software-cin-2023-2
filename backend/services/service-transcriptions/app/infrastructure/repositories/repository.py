from abc import ABC, abstractmethod


class Repository(ABC):
    """
    Represents a data repository.
    This class defines a generic interface for database-specific Repository classes.
    """

    @abstractmethod
    def insert(self, **kwargs):
        """
        Insert a new record into the repository.

        :param kwargs: Keyword arguments representing the data to be inserted.
        :type kwargs: dict
        :return: True if the insertion is successful, False otherwise.
        :rtype: bool
        """
        pass

    @abstractmethod
    def update(self, **kwargs):
        """
        Update a record in the repository.

        :param kwargs: Keyword arguments representing the data to be updated.
        :type kwargs: dict
        :return: True if the update is successful, False otherwise.
        :rtype: bool
        """
        pass

    @abstractmethod
    def delete(self, **kwargs):
        """
        Delete a record from the repository.

        :param kwargs: Keyword arguments representing the criteria for deletion.
        :type kwargs: dict
        :return: True if the deletion is successful, False otherwise.
        :rtype: bool
        """
        pass

    @abstractmethod
    def find_one(self, **kwargs):
        """
        Retrieve a record from the repository.

        :param kwargs: Keyword arguments representing the criteria for retrieval.
        :type kwargs: dict
        :return: The retrieved data or None if not found.
        :rtype: dict or None
        """
        pass

    @abstractmethod
    def find(self, **kwargs):
        """
        List records from the repository.

        :param kwargs: Keyword arguments representing optional filtering criteria.
        :type kwargs: dict
        :return: A find of retrieved data.
        :rtype: find
        """
        pass
