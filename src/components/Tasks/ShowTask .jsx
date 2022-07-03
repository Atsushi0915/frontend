export const ShowTask = (props) => {

  return (
    <>
      <div className="modal fade" id="taskModal" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" >{props.task.title}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              タスク詳細：<br />
              {props.task.content}
            </div>
            <div className="modal-footer">
              <button type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal">戻る</button>
              <button type="button"
                onClick={() => props.onClickNavigate(props.task.id)}
                data-bs-dismiss="modal"
                className="btn btn-primary">
                編集
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
