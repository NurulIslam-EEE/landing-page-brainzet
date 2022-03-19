import React, { useState, useEffect } from 'react';

const LatestNews = () => {
    const [news, setNews] = useState([]);
    const [news2, setNews2] = useState([]);
    useEffect(() => {
        fetch('https://tranquil-forest-38467.herokuapp.com/news')
            .then(res => res.json())
            .then(data => {
                setNews(data)
                const filter = data.filter((a, b) => b !== 0)
                setNews2(filter)
            })
    })

    console.log(news)


    console.log(news2)
    return (
        <div>
            <div style={{ maxWidth: '1400px', margin: '0 auto' }} className='latestNews'>
                <h1 style={{ color: '#2F327D' }} className='text-center'>Lastest News and Resources</h1>
                <p className='text-center'>See the developments that have occurred to Skillines in the world</p>
                <div style={{ maxWidth: '1500px' }} className='row'>
                    <div className='col-md-6 p-5'>
                        <div style={{ width: '90%' }}>
                            <div className='pb-3'>

                                <img width='90%' src={news[0]?.image} alt="" />
                            </div>
                            <button className='pb-' style={{
                                background: '#F4C467', border: '0', borderRadius: '10px', padding: '4px 10px', margin: '5px 0'
                            }}>NEWS</button>
                            <h4 className='pb-2'>
                                {news[0]?.title}
                            </h4>
                            <p>{news[0]?.description}.</p>
                        </div>

                    </div>




                    <div className='col-md-6'>
                        {/* card2 */}
                        {news2?.map(n => <div className='card2' style={{ width: '90%' }} >

                            <div>
                                <img src={n.image} alt="" />
                            </div>
                            <div>
                                <h4 className='pb-3 ps-3'>
                                    {n.title}
                                </h4>
                                <p className='ps-3'>{n.description}</p>
                            </div>

                        </div>)}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestNews;