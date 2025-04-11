// WebRTC

let peerConnection = new RTCPeerConnection();
peerConnection.onicecandidate = (event) => {
    if (event.candidate) {
        console.log(event.candidate);
    }
};  // "RTCPeerConnection"   (WebRTC)   (peerConnection)   (onicecandidate)   (event)   (candidate)

// WebRTC Data Channels

let dataChannell = peerConnection.createDataChannel("myChannell");   // "WebRTC Data Channels"   (dataChannel)   (peerConnection)   (createDataChannel)

// WebRTC RTCPeerConnection

let peerConnection = new RTCPeerConnection();   // "WebRTC RTCPeerConnection"   (peerConnection)   (RTCPeerConnection)

// WebRTC RTCDataChannel

let dataChannel = peerConnection.createDataChannel("myChannel");   // "WebRTC RTCDataChannel"   (dataChannel)   (peerConnection)   (createDataChannel)

// WebRTC RTCIceCandidate

let iceCandidate = new RTCIceCandidate();   // "WebRTC RTCIceCandidate"   (iceCandidate)   (RTCIceCandidate)

// WebRTC RTCSessionDescription

let sessionDescription = new RTCSessionDescription();   // "WebRTC RTCSessionDescription"   (sessionDescription)   (RTCSessionDescription)

// WebRTC RTCPeerConnectionIceEvent

let iceEvent = new RTCPeerConnectionIceEvent();    // "WebRTC RTCPeerConnectionIceEvent"   (iceEvent)   (RTCPeerConnectionIceEvent)

// WebRTC RTCDataChannelEvent

let dataChannelEvent = new RTCDataChannelEvent();   // "WebRTC RTCDataChannelEvent"   (dataChannelEvent)   (RTCDataChannelEvent)

// WebRTC RTCPeerConnectionIceErrorEvent

let iceErrorEvent = new RTCPeerConnectionIceErrorEvent();   // "WebRTC RTCPeerConnectionIceErrorEvent"   (iceErrorEvent)   (RTCPeerConnectionIceErrorEvent)