INSTALLED_APPS = [
    'rest_framework',
    'corsheaders',
    'snippets',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
]

CORS_ALLOW_ALL_ORIGINS = True
