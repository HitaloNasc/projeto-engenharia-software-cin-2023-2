from app.app import app
from app.env import PORT

print(f"App is running", flush=True)
app.run(host="0.0.0.0", port=PORT, debug=True)

