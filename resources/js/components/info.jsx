import React from "react";

function info({ store }) {    
    return (
        <div className="info col">
            <div className="info-header">{ store['name'] }</div>
            <div className="info-item row">
                <div className="col d-flex justify-content-end">
                    <span style={{ float: 'left' }} className="mx-1"> دقيقة </span>
                    <span> { store['delievry_time'] } </span>
                </div>
                <div className="col">
                    <span>وقت التوصيل</span>
                </div>
            </div>
            <div className="info-item row">
                <div className="col">
                    { store['end_time'] } - { store['start_time'] } 
                </div>
                <div className="col">ساعات العمل</div>
            </div>
            <div className="info-item row">
                <div className="col d-flex justify-content-end">
                    <span className="mx-1" style={{ float: 'left' }}>ج.م</span>
                    <span>{ store['delivery_fees'] }</span>
                </div>
                <div className="col">رسوم التوصيل</div>
            </div>
            <div className="info-item row">
                {/* <div className="col">
                    {
                        store['kitchens'].map((kitchen, index) => {
                            let comma = '';
                            if (index != (store['kitchens'].length - 1))
                            {
                                comma = '،'
                            }
                            return kitchen['name'] + comma + ' ';
                        })
                    }
                </div> */}
                <div className="col">أنواع المطابخ</div>
            </div>
        </div>
    );
}

export default info;
