import React from 'react';


const Index = ({ isOpen, onClose, title, content, footer }) => {
  return (
    <>
      {isOpen && (
        <div
          className="modal fade show"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          style={{ display: 'block' }}
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div class="modal-header bg-light">
                <h5 class="modal-title">{title}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" onClick={onClose}></button>
              </div>
              <div class="modal-body">
                {content}
              </div>
              {footer && (
                <div class="modal-footer bg-light d-flex justify-content-end">
                  {footer}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Index;
