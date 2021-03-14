from resource_configuration import create_app

if __name__ == "__main__":
    app = create_app(True)
    app.run()