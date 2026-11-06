function StudyLog() {
  return (
    <div className="study-log">
      <header className="study-log-header">
        <h1 className="study-log-title">스터디 로그</h1>
        <p className="study-log-total">
          총 <strong className="study-log-total-value">95</strong>분
        </p>
      </header>

      <form className="study-log-form">
        <label className="study-log-field">
          <span className="study-log-label">내용</span>
          <input
            className="study-log-input"
            type="text"
            name="title"
            placeholder="오늘 공부한 내용"
          />
        </label>

        <label className="study-log-field">
          <span className="study-log-label">과목</span>
          <select className="study-log-select" name="subject">
            <option value="React">React</option>
            <option value="JS">JS</option>
            <option value="CS">CS</option>
            <option value="etc">기타</option>
          </select>
        </label>

        <label className="study-log-field">
          <span className="study-log-label">시간(분)</span>
          <input
            className="study-log-input"
            type="number"
            name="minutes"
            min="0"
            placeholder="30"
          />
        </label>

        <button className="study-log-submit" type="submit">
          추가
        </button>
      </form>

      <ul className="study-log-list">
        <li className="study-log-item">
          <input className="study-log-check" type="checkbox" />
          <div className="study-log-item-body">
            <p className="study-log-item-title">불변성 패턴 복습</p>
            <div className="study-log-item-meta">
              <span className="study-log-subject">React</span>
              <span className="study-log-minutes">40분</span>
            </div>
          </div>
          <div className="study-log-item-actions">
            <button className="study-log-edit-button" type="button">
              편집
            </button>
            <button className="study-log-delete-button" type="button">
              삭제
            </button>
          </div>
        </li>

        <li className="study-log-item is-done">
          <input className="study-log-check" type="checkbox" defaultChecked />
          <div className="study-log-item-body">
            <p className="study-log-item-title">배열 메서드 map, filter</p>
            <div className="study-log-item-meta">
              <span className="study-log-subject">JS</span>
              <span className="study-log-minutes">55분</span>
            </div>
          </div>
          <div className="study-log-item-actions">
            <button className="study-log-edit-button" type="button">
              편집
            </button>
            <button className="study-log-delete-button" type="button">
              삭제
            </button>
          </div>
        </li>
      </ul>

      <p className="study-log-empty">
        아직 기록이 없어요. 오늘 공부한 내용을 추가해 보세요.
      </p>
    </div>
  );
}

export default StudyLog;
