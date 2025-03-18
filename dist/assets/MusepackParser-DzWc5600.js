import{S as w,c,b as F,f as i,g as r,i as d,m as P,B as y,F as L,J as S,k as n}from"./index-94bm2jhO.js";import{A as v}from"./AbstractID3Parser-qLlux6Id.js";import"./ID3v2Parser-Be7DCYGQ.js";const l=c("music-metadata:parser:musepack:sv8"),x=new w(2,"latin1"),u={len:5,get:(a,e)=>({crc:i.get(a,e),streamVersion:F.get(a,e+4)})},p={len:2,get:(a,e)=>({sampleFrequency:[44100,48e3,37800,32e3][r(a,e,0,3)],maxUsedBands:r(a,e,3,5),channelCount:r(a,e+1,0,4)+1,msUsed:d(a,e+1,4),audioBlockFrames:r(a,e+1,5,3)})};class C{constructor(e){this.tokenizer=e}async readPacketHeader(){const e=await this.tokenizer.readToken(x),t=await this.readVariableSizeField();return{key:e,payloadLength:t.value-2-t.len}}async readStreamHeader(e){const t={};l(`Reading SH at offset=${this.tokenizer.position}`);const s=await this.tokenizer.readToken(u);e-=u.len,Object.assign(t,s),l(`SH.streamVersion = ${s.streamVersion}`);const o=await this.readVariableSizeField();e-=o.len,t.sampleCount=o.value;const m=await this.readVariableSizeField();e-=m.len,t.beginningOfSilence=m.value;const z=await this.tokenizer.readToken(p);return e-=p.len,Object.assign(t,z),await this.tokenizer.ignore(e),t}async readVariableSizeField(e=1,t=0){let s=await this.tokenizer.readNumber(F);return(s&128)===0?{len:e,value:t+s}:(s&=127,s+=t,this.readVariableSizeField(e+1,s<<7))}}class h extends P("Musepack"){}const M=c("music-metadata:parser:musepack");class T extends y{constructor(){super(...arguments),this.audioLength=0}async parse(){if(await this.tokenizer.readToken(L)!=="MPCK")throw new h("Invalid Magic number");return this.metadata.setFormat("container","Musepack, SV8"),this.parsePacket()}async parsePacket(){const e=new C(this.tokenizer);do{const t=await e.readPacketHeader();switch(M(`packet-header key=${t.key}, payloadLength=${t.payloadLength}`),t.key){case"SH":{const s=await e.readStreamHeader(t.payloadLength);this.metadata.setFormat("numberOfSamples",s.sampleCount),this.metadata.setFormat("sampleRate",s.sampleFrequency),this.metadata.setFormat("duration",s.sampleCount/s.sampleFrequency),this.metadata.setFormat("numberOfChannels",s.channelCount);break}case"AP":this.audioLength+=t.payloadLength,await this.tokenizer.ignore(t.payloadLength);break;case"RG":case"EI":case"SO":case"ST":case"CT":await this.tokenizer.ignore(t.payloadLength);break;case"SE":return this.metadata.format.duration&&this.metadata.setFormat("bitrate",this.audioLength*8/this.metadata.format.duration),S.tryParseApeHeader(this.metadata,this.tokenizer,this.options);default:throw new h(`Unexpected header: ${t.key}`)}}while(!0)}}class V{constructor(e){this.tokenizer=e,this.pos=0,this.dword=null}async read(e){for(;this.dword===null;)this.dword=await this.tokenizer.readToken(i);let t=this.dword;return this.pos+=e,this.pos<32?(t>>>=32-this.pos,t&(1<<e)-1):(this.pos-=32,this.pos===0?(this.dword=null,t&(1<<e)-1):(this.dword=await this.tokenizer.readToken(i),this.pos&&(t<<=this.pos,t|=this.dword>>>32-this.pos),t&(1<<e)-1))}async ignore(e){if(this.pos>0){const o=32-this.pos;this.dword=null,e-=o,this.pos=0}const t=e%32,s=(e-t)/32;return await this.tokenizer.ignore(s*4),this.read(t)}}const b={len:6*4,get:(a,e)=>{const t={signature:new TextDecoder("latin1").decode(a.subarray(e,e+3)),streamMinorVersion:r(a,e+3,0,4),streamMajorVersion:r(a,e+3,4,4),frameCount:i.get(a,e+4),maxLevel:n.get(a,e+8),sampleFrequency:[44100,48e3,37800,32e3][r(a,e+10,0,2)],link:r(a,e+10,2,2),profile:r(a,e+10,4,4),maxBand:r(a,e+11,0,6),intensityStereo:d(a,e+11,6),midSideStereo:d(a,e+11,7),titlePeak:n.get(a,e+12),titleGain:n.get(a,e+14),albumPeak:n.get(a,e+16),albumGain:n.get(a,e+18),lastFrameLength:i.get(a,e+20)>>>20&2047,trueGapless:d(a,e+23,0)};return t.lastFrameLength=t.trueGapless?i.get(a,20)>>>20&2047:0,t}},k=c("music-metadata:parser:musepack");class H extends y{constructor(){super(...arguments),this.bitreader=null,this.audioLength=0,this.duration=null}async parse(){const e=await this.tokenizer.readToken(b);if(e.signature!=="MP+")throw new h("Unexpected magic number");k(`stream-version=${e.streamMajorVersion}.${e.streamMinorVersion}`),this.metadata.setFormat("container","Musepack, SV7"),this.metadata.setFormat("sampleRate",e.sampleFrequency);const t=1152*(e.frameCount-1)+e.lastFrameLength;this.metadata.setFormat("numberOfSamples",t),this.duration=t/e.sampleFrequency,this.metadata.setFormat("duration",this.duration),this.bitreader=new V(this.tokenizer),this.metadata.setFormat("numberOfChannels",e.midSideStereo||e.intensityStereo?2:1);const s=await this.bitreader.read(8);return this.metadata.setFormat("codec",(s/100).toFixed(2)),await this.skipAudioData(e.frameCount),k(`End of audio stream, switching to APEv2, offset=${this.tokenizer.position}`),S.tryParseApeHeader(this.metadata,this.tokenizer,this.options)}async skipAudioData(e){for(;e-- >0;){const s=await this.bitreader.read(20);this.audioLength+=20+s,await this.bitreader.ignore(s)}const t=await this.bitreader.read(11);this.audioLength+=t,this.duration!==null&&this.metadata.setFormat("bitrate",this.audioLength/this.duration)}}const g=c("music-metadata:parser:musepack");class E extends v{async postId3v2Parse(){const e=await this.tokenizer.peekToken(new w(3,"latin1"));let t;switch(e){case"MP+":{g("Stream-version 7"),t=new H(this.metadata,this.tokenizer,this.options);break}case"MPC":{g("Stream-version 8"),t=new T(this.metadata,this.tokenizer,this.options);break}default:throw new h("Invalid signature prefix")}return t.parse()}}export{E as MusepackParser};
