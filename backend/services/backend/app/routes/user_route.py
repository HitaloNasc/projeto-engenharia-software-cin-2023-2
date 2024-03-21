from quart import Blueprint, request
from quart_jwt_extended import jwt_required, get_jwt_identity
from app.infrastructure.repositories.config import mongodb_connection
from app.infrastructure.repositories.mongo_user_repository import (
    MongoUserRepository
)
from app.infrastructure.repositories.mongo_token_repository import (
    MongoTokenRepository
)
from app.usecases.create_user_usecase import CreateUserUseCase
from app.usecases.login_usercase import LoginUseCase
from app.usecases.logout_usecase import LogoutUseCase
from app.controllers.create_user_controller import CreateUserController
from app.controllers.login_controller import LoginController
from app.controllers.logout_controller import LogoutController


user_route = Blueprint("user", __name__)


@user_route.route("/user", methods=["POST"])
async def create_user():
    data = await request.get_json()

    name = data.get("name")
    email = data.get("email")
    password = data.get("password")

    user_repository = MongoUserRepository(mongodb_connection)
    create_user_usecase = CreateUserUseCase(user_repository)
    create_user_controller = CreateUserController(create_user_usecase)

    return await create_user_controller.execute(name, email, password)


@user_route.route("/login", methods=["POST"])
async def login():
    data = await request.get_json()

    email = data.get("email")
    password = data.get("password")

    token_repository = MongoTokenRepository(mongodb_connection)
    user_repository = MongoUserRepository(mongodb_connection)
    login_usecase = LoginUseCase(user_repository, token_repository)
    login_controller = LoginController(login_usecase)

    return await login_controller.execute(email, password)


@user_route.route("/logout", methods=["POST"])
@jwt_required
async def logout():

    token = get_jwt_identity()

    token_repository = MongoTokenRepository(mongodb_connection)
    logout_usecase = LogoutUseCase(token_repository)
    logout_controller = LogoutController(logout_usecase)

    return await logout_controller.execute(token)
