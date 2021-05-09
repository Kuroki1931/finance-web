import classes from './How_read.module.css'
import React from 'react'
import head_icon from './read.jpeg'

const How_read = () => {
    return (
        <div>
            <div className={classes.head_box}>
                <img src={head_icon} className={classes.head_icon}/>
                <div className={classes.head_font}>読み方</div>
            </div>
            <div className={classes.body_all}>
                <div className={classes.main_box}>
                    <div>我々が提供するものは日本の中小型株の以下の3つのレポートで構成されている。</div>
                    <p>1)シンプルベーシックレポート~一目で企業の必要なデータ、状況、課題などを確認できる</p>
                    <p>2)ディープレポート~是非、注目して欲しい銘柄の深堀りレポート</p> 
                    <p>3)ショートレポート~決算に向けたワンポイント情報など</p>
                    <div>
                        特徴としては、証券会社のアナリストではなく、元ヘッジファンド・マネージャーやバイサイドのア ナリストが執筆している点である。実際の投資判断をするのは証券会社のアナリストではなくバイサ イドのファンド・マネージャーであり、それ故に、我々はリサーチの為のリサーチ情報を極力省き、 投資判断に必要な情報を盛り込むことに注力している。また、これらのレポートは同時にプロの投資 家や海外のヘッジファンドやアクティビストにも配信している。つまり、個人投資家の方も、少なく とも我々が発する情報については、プロの投資家と同列で見ることができる、今まで日本になかった モデルを採用している。
                    </div>
                    <br/>
                    <div>
                        また、質問箱を用意しており、レポートを読んでもっと聞きたいことなるがあればいつでも気軽に書 き込めるようになっている(ただし、株価の投資判断については行ってない)。要望の多い質問につ いては、何らかのフィードバックを行うことも考えている。
                    </div>
                    <div className={classes.sigh}>日本最高基盤</div>
                </div>
            </div>
        </div>
    )
}

export default How_read
