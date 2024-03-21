from quart import Quart
from app.swaggerui import swagger_ui
from app.helpers.handler import handler
from app.helpers.http_status import HTTP_STATUS
from app.helpers.error import INTERNAL_SERVER_ERROR, NOT_FOUND
from app.helpers.error import ApplicationException
from app.routes.extract_route import extract_route


app = Quart(__name__)
app.config.from_object(__name__)


# routes
@app.route("/", methods=["GET"])
def health():
   return handler.format_response(HTTP_STATUS.OK.value, "OK")
    

app.register_blueprint(swagger_ui)
app.register_blueprint(extract_route)


# not found middleware
@app.route("/<path:path>", methods=["GET", "POST", "PUT", "DELETE"])
def catch_all(path):
    raise NOT_FOUND([f"The route /{path} does not exist."])


# error middleware
@app.errorhandler(Exception)
def handle_error(e):
    if isinstance(e, ApplicationException):
        return handler.format_error(e)

    # Handle other types of exceptions here, if needed.
    print(e, flush=True)
    return handler.format_error(INTERNAL_SERVER_ERROR())
