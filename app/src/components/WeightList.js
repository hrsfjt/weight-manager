import React from 'react';
import Style from './WeightList.module.css';

class WeightList extends React.Component {
    render() {
        const {weightList} = this.props;
        return (
            <div className={Style.table}>
                <div className={Style.head}>
                    <div className={Style.headRow}>
                        <div className={Style.date}>Date</div>
                        <div className={Style.weight}>Weight</div>
                    </div>
                </div>
                <div className={Style.body}>
                    {weightList.map((item, index) => {
                        return (
                            <div className={Style.bodyRow} key={index}>
                                <div className={Style.date}>{item.date}</div>
                                <div className={Style.weight}>{item.weight} kg</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default WeightList;