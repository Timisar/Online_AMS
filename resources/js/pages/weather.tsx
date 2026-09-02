export default function Weather() {
    return (
        <div className="weather-container">
            {/* Weather Header ----------------- */}
            <div className="weather-header">
                <div>
                    <h2>Weather</h2>
                    <p>Kathmandu, Nepal</p>
                </div>

                <div className="weather-icon">☀️</div>
            </div>

            {/* Current Weather ----------------- */}
            <div className="current-weather">
                <div className="temperature">24°</div>

                <div className="weather-condition">
                    <h3>Sunny</h3>
                    <p>Feels like 25°</p>
                </div>
            </div>

            {/* Weather Details ----------------- */}
            <div className="weather-details">
                <div className="weather-detail">
                    <span>💧</span>
                    <div>
                        <small>Humidity</small>
                        <strong>65%</strong>
                    </div>
                </div>

                <div className="weather-detail">
                    <span>💨</span>
                    <div>
                        <small>Wind</small>
                        <strong>12 km/h</strong>
                    </div>
                </div>

                <div className="weather-detail">
                    <span>🌡️</span>
                    <div>
                        <small>Pressure</small>
                        <strong>1013 hPa</strong>
                    </div>
                </div>

                <div className="weather-detail">
                    <span>👁️</span>
                    <div>
                        <small>Visibility</small>
                        <strong>10 km</strong>
                    </div>
                </div>
            </div>

            {/* Hourly Forecast ----------------- */}
            <div className="hourly-weather">
                <h3>Hourly Forecast</h3>

                <div className="hourly-list">
                    <div className="hour">
                        <span>Now</span>
                        <span>☀️</span>
                        <strong>24°</strong>
                    </div>

                    <div className="hour">
                        <span>10 AM</span>
                        <span>☀️</span>
                        <strong>25°</strong>
                    </div>

                    <div className="hour">
                        <span>11 AM</span>
                        <span>🌤️</span>
                        <strong>26°</strong>
                    </div>

                    <div className="hour">
                        <span>12 PM</span>
                        <span>🌤️</span>
                        <strong>27°</strong>
                    </div>

                    <div className="hour">
                        <span>1 PM</span>
                        <span>☁️</span>
                        <strong>27°</strong>
                    </div>
                </div>
            </div>

            {/* 7 Day Forecast ----------------- */}
            <div className="forecast">
                <h3>7-Day Forecast</h3>

                <div className="forecast-list">
                    <div className="forecast-day">
                        <span>Today</span>
                        <span>☀️</span>
                        <span>24° / 18°</span>
                    </div>

                    <div className="forecast-day">
                        <span>Tue</span>
                        <span>🌤️</span>
                        <span>25° / 19°</span>
                    </div>

                    <div className="forecast-day">
                        <span>Wed</span>
                        <span>🌧️</span>
                        <span>22° / 18°</span>
                    </div>

                    <div className="forecast-day">
                        <span>Thu</span>
                        <span>🌦️</span>
                        <span>23° / 17°</span>
                    </div>

                    <div className="forecast-day">
                        <span>Fri</span>
                        <span>☀️</span>
                        <span>26° / 18°</span>
                    </div>

                    <div className="forecast-day">
                        <span>Sat</span>
                        <span>☁️</span>
                        <span>24° / 18°</span>
                    </div>

                    <div className="forecast-day">
                        <span>Sun</span>
                        <span>🌧️</span>
                        <span>21° / 17°</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
