import os


def get_var(var_name, default_value=None):
    result = default_value
    env_value = os.getenv(var_name)
    if env_value is not None:
        result = env_value
    return result
















