(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,t,a)=>{const s=a(377),{lightningChart:n,PalettedFill:o,LUT:r,emptyLine:l,AxisScrollStrategies:i,AxisTickStrategies:c,LegendBoxBuilders:d,regularColorSteps:m,Themes:p}=s,{createSpectrumDataGenerator:u}=a(613),h=512,g=n({resourcesBaseUrl:new URL(document.head.baseURI).origin+new URL(document.head.baseURI).pathname+"resources/"}).ChartXY({defaultAxisX:{type:"linear-highPrecision"},theme:p[new URLSearchParams(window.location.search).get("theme")||"darkGold"]||void 0}).setTitle("Scrolling Heatmap Spectrogram");g.axisX.setScrollStrategy(i.progressive).setDefaultInterval((e=>({end:e.dataMax,start:(e.dataMax??0)-1e4,stopAxisAfter:!1}))).setTickStrategy(c.DateTime),g.axisY.setTitle("Frequency").setUnits("Hz").setInterval({start:0,end:h});const S=new o({lut:new r({steps:m(0,75,g.getTheme().examples.spectrogramColorPalette),units:"dB",interpolate:!0}),lookUpProperty:"value"}),w=g.addHeatmapScrollingGridSeries({scrollDimension:"columns",resolution:h}).setStep({x:5,y:1}).setFillStyle(S).setWireframeStyle(l).setDataCleaning({minDataPointCount:1e3});let x;g.addLegendBox(d.HorizontalLegendBox).setAutoDispose({type:"max-width",maxWidth:.8}).add(g);const D=(e,t)=>{x||(x=e,w.setStart({x:e,y:0}));const a=Math.round((e-x)/5);w.invalidateIntensityValues({iSample:a,values:[t]})};let y=0;u().setSampleSize(h).setNumberOfSamples(1e3).generate().toPromise().then((e=>e.map((e=>e.map((e=>80*e)))))).then((e=>{let t=0,a=Date.now(),s=0;const n=()=>{const o=Date.now();let r=100*(o-a)/1e3+s;s=r%1,r=Math.floor(r);for(let s=0;s<r;s+=1){const n=a+(s+1)/r*(o-a),l=e[t];t=(t+1)%e.length,D(n,l)}y+=r*h,a=o,requestAnimationFrame(n)};n()}));const f=g.getTitle();let T=Date.now(),U=Date.now();setInterval((()=>{if(y>0&&Date.now()-T>0){const e=1e3*y/(Date.now()-T);g.setTitle(`${f} (${Math.round(e)} data points / s)`)}Date.now()-U>=5e3&&(T=U=Date.now(),y=0)}),1e3)}},e=>{e.O(0,[502],(()=>e(e.s=44))),e.O()}]);