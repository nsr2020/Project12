//El array de bolas es de 75, pero hasta que funcione correctamente, lo he dejado en 20 y como el cartón tiene 15, así para probar
//errores es mucho más cómodo y rápido.

const bingoNumbers = [
  {
    id: 1,
    img: "https://res.cloudinary.com/dnju3aw4b/image/upload/v1712924871/bingoNumbers/numero-1_cb1ysa.png",
  },
  {
    id: 2,
    img: "https://res.cloudinary.com/dnju3aw4b/image/upload/v1702836886/UCDM/GamesHub/numero-2_1_l7xfln.png",
  },
  {
    id: 3,
    img: "https://res.cloudinary.com/dnju3aw4b/image/upload/v1702836980/UCDM/GamesHub/tres_bzunpe.png",
  },
  {
    id: 4,
    img: "https://res.cloudinary.com/dnju3aw4b/image/upload/v1702837054/UCDM/GamesHub/num4_vehg5a.png",
  },
  {
    id: 5,
    img: "https://res.cloudinary.com/dnju3aw4b/image/upload/v1702837095/UCDM/GamesHub/num5_za6tga.png",
  },
  {
    id: 6,
    img: "https://res.cloudinary.com/dnju3aw4b/image/upload/v1702837156/UCDM/GamesHub/num6_j7rmwk.png",
  },
  {
    id: 7,
    img: "https://res.cloudinary.com/dnju3aw4b/image/upload/v1702837227/UCDM/GamesHub/num7_imbox2.png",
  },
  {
    id: 8,
    img: "https://res.cloudinary.com/dnju3aw4b/image/upload/v1702837264/UCDM/GamesHub/num8_rp7r0z.png",
  },
  {
    id: 9,
    img: "https://res.cloudinary.com/dnju3aw4b/image/upload/v1702837324/UCDM/GamesHub/num9_lkovgx.png",
  },
  {
    id: 10,
    img: "https://res.cloudinary.com/dnju3aw4b/image/upload/v1702837370/UCDM/GamesHub/num10_gm8l2n.png",
  },
  {
    id: 11,
    img: "https://res.cloudinary.com/dnju3aw4b/image/upload/v1702837377/UCDM/GamesHub/num11_gtatrb.png",
  },
  {
    id: 12,
    img: "https://res.cloudinary.com/dnju3aw4b/image/upload/v1702837434/UCDM/GamesHub/num12_bimngh.png",
  },
  {
    id: 13,
    img: "https://res.cloudinary.com/dnju3aw4b/image/upload/v1702837465/UCDM/GamesHub/num13_mgimal.png",
  },
  {
    id: 14,
    img: "https://res.cloudinary.com/dnju3aw4b/image/upload/v1702837508/UCDM/GamesHub/num14_fksh9v.png",
  },
  {
    id: 15,
    img: "https://res.cloudinary.com/dnju3aw4b/image/upload/v1702837542/UCDM/GamesHub/num15_tck3oi.png",
  },
  {
    id: 16,
    img: "https://res.cloudinary.com/dnju3aw4b/image/upload/v1702837571/UCDM/GamesHub/num16_hegjaj.png",
  },
  {
    id: 17,
    img: "https://res.cloudinary.com/dnju3aw4b/image/upload/v1702837578/UCDM/GamesHub/num17_h5hajv.png",
  },
  {
    id: 18,
    img: "https://res.cloudinary.com/dnju3aw4b/image/upload/v1702837658/UCDM/GamesHub/num18_dljqdd.png",
  },
  {
    id: 19,
    img: "https://res.cloudinary.com/dnju3aw4b/image/upload/v1712924947/bingoNumbers/diecinueve_y5qzyr.png",
  },
  {
    id: 20,
    img: "https://res.cloudinary.com/dnju3aw4b/image/upload/v1702837742/UCDM/GamesHub/num20_ykmm4m.png",
  },
];
/*     { id: 21, img: 'https://res.cloudinary.com/dnju3aw4b/image/upload/v1702837749/UCDM/GamesHub/num21_x5dmzc.png',  selectedCardBoardBall: false },
    { id: 22, img: 'https://res.cloudinary.com/dnju3aw4b/image/upload/v1702837797/UCDM/GamesHub/num22_vwt1na.png',  selectedCardBoardBall: false },
    { id: 23, img: 'https://res.cloudinary.com/dnju3aw4b/image/upload/v1702912386/UCDM/GamesHub/num23a_i6phfu.png',  selectedCardBoardBall: false },
    { id: 24, img: 'https://res.cloudinary.com/dnju3aw4b/image/upload/v1702837849/UCDM/GamesHub/num24_pg990r.png',  selectedCardBoardBall: false },
    { id: 25, img: 'https://res.cloudinary.com/dnju3aw4b/image/upload/v1702837884/UCDM/GamesHub/num25_cem12k.png',  selectedCardBoardBall: false },
    { id: 26, img: 'https://res.cloudinary.com/dnju3aw4b/image/upload/v1702837910/UCDM/GamesHub/num26_o8hghu.png',  selectedCardBoardBall: false },
    { id: 27, img: 'https://res.cloudinary.com/dnju3aw4b/image/upload/v1702837918/UCDM/GamesHub/num27_nodf7w.png',  selectedCardBoardBall: false },
    { id: 28, img: 'https://res.cloudinary.com/dnju3aw4b/image/upload/v1702838825/UCDM/GamesHub/num28_fntgmd.png',  selectedCardBoardBall: false },
    { id: 29, img: 'https://res.cloudinary.com/dnju3aw4b/image/upload/v1702838830/UCDM/GamesHub/num29_drs4mr.png',  selectedCardBoardBall: false },
    { id: 30, img: 'https://res.cloudinary.com/dnju3aw4b/image/upload/v1712925020/bingoNumbers/numero-30_hhi8yt.png',  selectedCardBoardBall: false },
    { id: 31, img: 'https://res.cloudinary.com/dnju3aw4b/image/upload/v1702838908/UCDM/GamesHub/num31_bwz4qz.png',  selectedCardBoardBall: false },
    { id: 32, img: 'https://res.cloudinary.com/dnju3aw4b/image/upload/v1702839025/UCDM/GamesHub/num32_cp1k2w.png', selectedBallSung: false, selectedCardBoardBall: false },
    { id: 33, img: 'https://res.cloudinary.com/dnju3aw4b/image/upload/v1702839062/UCDM/GamesHub/num33_r2d0nc.png', selectedBallSung: false, selectedCardBoardBall: false },
    { id: 34, img: 'https://res.cloudinary.com/dnju3aw4b/image/upload/v1702839117/UCDM/GamesHub/num34_evt69f.png', selectedBallSung: false, selectedCardBoardBall: false },
    { id: 35, img: 'https://res.cloudinary.com/dnju3aw4b/image/upload/v1702839102/UCDM/GamesHub/num35_gxiyyt.png', selectedBallSung: false, selectedCardBoardBall: false },
    { id: 36, img: 'https://res.cloudinary.com/dnju3aw4b/image/upload/v1702839149/UCDM/GamesHub/num36_ojlmpb.png', selectedBallSung: false, selectedCardBoardBall: false },
    { id: 37, img: 'https://res.cloudinary.com/dnju3aw4b/image/upload/v1702839205/UCDM/GamesHub/num37_moh4xw.png', selectedBallSung: false, selectedCardBoardBall: false },
    { id: 38, img: 'https://res.cloudinary.com/dnju3aw4b/image/upload/v1702839230/UCDM/GamesHub/num38_jnzfdc.png', selectedBallSung: false, selectedCardBoardBall: false },
    { id: 39, img: 'https://res.cloudinary.com/dnju3aw4b/image/upload/v1702839553/UCDM/GamesHub/num39_swbbpd.png', selectedBallSung: false, selectedCardBoardBall: false },
    { id: 40, img: 'https://res.cloudinary.com/dnju3aw4b/image/upload/v1702839579/UCDM/GamesHub/num40_nksixu.png', selectedBallSung: false, selectedCardBoardBall: false },
    { id: 41, img: 'https://res.cloudinary.com/dnju3aw4b/image/upload/v1713005916/cuarenta-y-uno_1_m0cyjs.png', selectedBallSung: false, selectedCardBoardBall: false },
    { id: 42, img: 'https://res.cloudinary.com/dnju3aw4b/image/upload/v1702839626/UCDM/GamesHub/num42_px0phd.png', selectedBallSung: false, selectedCardBoardBall: false },
    { id: 43, img: 'https://res.cloudinary.com/dnju3aw4b/image/upload/v1702839737/UCDM/GamesHub/num43_kgoc56.png', selectedBallSung: false, selectedCardBoardBall: false },
    { id: 44, img: 'https://res.cloudinary.com/dnju3aw4b/image/upload/v1702839769/UCDM/GamesHub/num44_b2fnvw.png', selectedBallSung: false, selectedCardBoardBall: false },
    { id: 45, img: 'https://res.cloudinary.com/dnju3aw4b/image/upload/v1702839803/UCDM/GamesHub/num45_v37kcg.png', selectedBallSung: false, selectedCardBoardBall: false },
    { id: 46, img: 'https://res.cloudinary.com/dnju3aw4b/image/upload/v1702839814/UCDM/GamesHub/num46_dxofjb.png', selectedBallSung: false, selectedCardBoardBall: false },
    { id: 47, img: 'https://res.cloudinary.com/dnju3aw4b/image/upload/v1702839879/UCDM/GamesHub/num47_yjr1lr.png', selectedBallSung: false, selectedCardBoardBall: false },
    { id: 48, img: 'https://res.cloudinary.com/dnju3aw4b/image/upload/v1702839912/UCDM/GamesHub/num48_p0n523.png', selectedBallSung: false, selectedCardBoardBall: false },
    { id: 49, img: 'https://res.cloudinary.com/dnju3aw4b/image/upload/v1702839982/UCDM/GamesHub/num49_expqfm.png', selectedBallSung: false, selectedCardBoardBall: false },
    { id: 50, img: 'https://res.cloudinary.com/dnju3aw4b/image/upload/v1702840003/UCDM/GamesHub/num50_a3tmzj.png', selectedBallSung: false, selectedCardBoardBall: false },
    { id: 51, img: 'https://res.cloudinary.com/dnju3aw4b/image/upload/v1702840048/UCDM/GamesHub/num51_czp1h3.png', selectedBallSung: false, selectedCardBoardBall: false },
    { id: 52, img: 'https://res.cloudinary.com/dnju3aw4b/image/upload/v1702840035/UCDM/GamesHub/num52_d4s4f3.png', selectedBallSung: false, selectedCardBoardBall: false },
    { id: 53, img: 'https://res.cloudinary.com/dnju3aw4b/image/upload/v1702840111/UCDM/GamesHub/num53_c0w62q.png', selectedBallSung: false, selectedCardBoardBall: false },
    { id: 54, img: 'https://res.cloudinary.com/dnju3aw4b/image/upload/v1702840124/UCDM/GamesHub/num54_iwaecj.png', selectedBallSung: false, selectedCardBoardBall: false },
    { id: 55, img: 'https://res.cloudinary.com/dnju3aw4b/image/upload/v1702840211/UCDM/GamesHub/num55_yow81b.png', selectedBallSung: false, selectedCardBoardBall: false },
    { id: 56, img: 'https://res.cloudinary.com/dnju3aw4b/image/upload/v1713005745/cincuenta-y-seis_qnvshu.png', selectedBallSung: false, selectedCardBoardBall: false },
    { id: 57, img: 'https://res.cloudinary.com/dnju3aw4b/image/upload/v1702840301/UCDM/GamesHub/num57_wr0z2y.png', selectedBallSung: false, selectedCardBoardBall: false },
    { id: 58, img: 'https://res.cloudinary.com/dnju3aw4b/image/upload/v1702840332/UCDM/GamesHub/num58_rtdr77.png', selectedBallSung: false, selectedCardBoardBall: false },
    { id: 59, img: 'https://res.cloudinary.com/dnju3aw4b/image/upload/v1712925187/bingoNumbers/cincuenta-y-nueve_xpda5l.png', selectedBallSung: false, selectedCardBoardBall: false },
    { id: 60, img: 'https://res.cloudinary.com/dnju3aw4b/image/upload/v1702840383/UCDM/GamesHub/num60_ecaokq.png', selectedBallSung: false, selectedCardBoardBall: false },
    { id: 61, img: 'https://res.cloudinary.com/dnju3aw4b/image/upload/v1702840457/UCDM/GamesHub/num61_z1xfs8.png', selectedBallSung: false, selectedCardBoardBall: false },
    { id: 62, img: 'https://res.cloudinary.com/dnju3aw4b/image/upload/v1702840509/UCDM/GamesHub/num62_bqvcel.png', selectedBallSung: false, selectedCardBoardBall: false },
    { id: 63, img: 'https://res.cloudinary.com/dnju3aw4b/image/upload/v1702840501/UCDM/GamesHub/num63_rvjyfc.png', selectedBallSung: false, selectedCardBoardBall: false },
    { id: 64, img: 'https://res.cloudinary.com/dnju3aw4b/image/upload/v1702840559/UCDM/GamesHub/num64_qasnsb.png', selectedBallSung: false, selectedCardBoardBall: false },
    { id: 65, img: 'https://res.cloudinary.com/dnju3aw4b/image/upload/v1702840616/UCDM/GamesHub/num65_tmmhe9.png', selectedBallSung: false, selectedCardBoardBall: false },
    { id: 66, img: 'https://res.cloudinary.com/dnju3aw4b/image/upload/v1702840643/UCDM/GamesHub/num66_aguboe.png', selectedBallSung: false, selectedCardBoardBall: false },
    { id: 67, img: 'https://res.cloudinary.com/dnju3aw4b/image/upload/v1702840675/UCDM/GamesHub/num67_ujfbrf.png', selectedBallSung: false, selectedCardBoardBall: false },
    { id: 68, img: 'https://res.cloudinary.com/dnju3aw4b/image/upload/v1702840705/UCDM/GamesHub/num68_eqnpyu.png', selectedBallSung: false, selectedCardBoardBall: false },
    { id: 69, img: 'https://res.cloudinary.com/dnju3aw4b/image/upload/v1702840741/UCDM/GamesHub/num69_wh1dfk.png', selectedBallSung: false, selectedCardBoardBall: false },
    { id: 70, img: 'https://res.cloudinary.com/dnju3aw4b/image/upload/v1702840749/UCDM/GamesHub/num70_xqs3ma.png', selectedBallSung: false, selectedCardBoardBall: false },
    { id: 71, img: 'https://res.cloudinary.com/dnju3aw4b/image/upload/v1702840808/UCDM/GamesHub/num71_lhqx3p.png', selectedBallSung: false, selectedCardBoardBall: false },
    { id: 72, img: 'https://res.cloudinary.com/dnju3aw4b/image/upload/v1702840845/UCDM/GamesHub/num72_lsgioj.png', selectedBallSung: false, selectedCardBoardBall: false },
    { id: 73, img: 'https://res.cloudinary.com/dnju3aw4b/image/upload/v1702840853/UCDM/GamesHub/num73_nwfowo.png', selectedBallSung: false, selectedCardBoardBall: false },
    { id: 74, img: 'https://res.cloudinary.com/dnju3aw4b/image/upload/v1702840921/UCDM/GamesHub/num74_sl9xtm.png', selectedBallSung: false, selectedCardBoardBall: false },
    { id: 75, img: 'https://res.cloudinary.com/dnju3aw4b/image/upload/v1702840949/UCDM/GamesHub/num75_bttaef.png', selectedBallSung: false, selectedCardBoardBall: false },
] */

export default bingoNumbers;
