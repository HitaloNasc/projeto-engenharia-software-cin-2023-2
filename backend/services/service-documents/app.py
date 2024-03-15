from app.app import app
from app.env import PORT

print(f"Running on http://0.0.0.0:{PORT}", flush=True)
app.run(host="0.0.0.0", port=PORT, debug=True)
