const MIN_30 = 1800000
const SESSION_NAME = "amazon_session_id"
const SESSION_SECRET = "ThisIsSecretKey"
const COOKIE_OPTIONS = {
    maxAge: MIN_30,
    httpOnly: true
}

module.exports = {
    MIN_30,
    SESSION_NAME,
    SESSION_SECRET,
    COOKIE_OPTIONS
}