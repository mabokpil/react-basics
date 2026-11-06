import { useState } from "react";

const initialLogs = [
  {
    id: 1,
    title: "불변성 패턴 복습",
    subject: "React",
    minutes: 40,
    isDone: false,
  },
  {
    id: 2,
    title: "배열 메서드 map, filter",
    subject: "JS",
    minutes: 55,
    isDone: true,
  },
  {
    id: 3,
    title: "프로세스와 스레드 차이",
    subject: "CS",
    minutes: 30,
    isDone: false,
  },
];
const initialForm = { title: "", subject: "React", minutes: "" };
function StudyLog() {
  const [logs, setLogs] = useState(initialLogs);
  const [form, setForm] = useState(initialForm);
  const totalMinutes = logs.reduce((acc, cur) => acc + cur.minutes, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.title.trim() === "") return;
    setLogs([
      ...logs,
      { id: Date.now(), ...form, minutes: Number(form.minutes), isDone: false },
    ]);
    setForm(initialForm);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="study-log">
      <header className="study-log-header">
        <h1 className="study-log-title">스터디 로그</h1>
        <p className="study-log-total">
          총 <strong className="study-log-total-value">{totalMinutes}</strong>분
        </p>
      </header>
      <form className="study-log-form" onSubmit={handleSubmit}>
        <label className="study-log-field">
          <span className="study-log-label">내용</span>
          <input
            className="study-log-input"
            type="text"
            name="title"
            value={form.title}
            placeholder="오늘 공부한 내용"
            onChange={handleChange}
          />
        </label>

        <label className="study-log-field">
          <span className="study-log-label">과목</span>
          <select
            className="study-log-select"
            name="subject"
            value={form.subject}
            onChange={handleChange}
          >
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
            value={form.minutes}
            onChange={handleChange}
          />
        </label>

        <button className="study-log-submit" type="submit">
          추가
        </button>
      </form>
      <ul className="study-log-list">
        {logs.map((log) => (
          <li
            key={log.id}
            className={`study-log-item ${log.isDone ? "is-done" : ""}`}
          >
            <input
              className="study-log-check"
              type="checkbox"
              readOnly
              checked={log.isDone}
            />
            <div className="study-log-item-body">
              <p className="study-log-item-title">{log.title}</p>
              <div className="study-log-item-meta">
                <span className="study-log-subject">{log.subject}</span>
                <span className="study-log-minutes">{log.minutes}분</span>
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
        ))}
      </ul>
      {logs.length === 0 && (
        <p className="study-log-empty">
          아직 기록이 없어요. 오늘 공부한 내용을 추가해 보세요.
        </p>
      )}
    </div>
  );
}

export default StudyLog;
