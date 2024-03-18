from quart import Blueprint, send_from_directory, Response

swagger_ui = Blueprint("swagger_ui", __name__, static_folder="app/assets/swaggerui")


@swagger_ui.route("/docs/")
@swagger_ui.route("/docs/<path:path>")
async def show(path=None):
    if path is None:
        return await send_from_directory(swagger_ui._static_folder, "index.html")
    return await send_from_directory(swagger_ui._static_folder, f"{path}")
