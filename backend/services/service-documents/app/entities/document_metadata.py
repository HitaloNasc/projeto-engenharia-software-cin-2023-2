class DocumentMetadata:
    def __init__(self, id: int, file_name: str, created_at: str, file_url: str, file_extension: str, file_size: int, status: int):
        self.id = id
        self.file_name = file_name
        self.created_at = created_at
        self.file_url = file_url
        self.file_extension = file_extension
        self.file_size = file_size
        self.status = status
