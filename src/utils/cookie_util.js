const MIN_30 = 1800000
const SESSION_ID = "amazon_session_id"
const COOKIE_OPTIONS = {
    maxAge: MIN_30,
    httpOnly: true
}

module.exports = {
    MIN_30,
    SESSION_ID,
    COOKIE_OPTIONS
}