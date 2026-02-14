

// import React, { useState } from "react";
// import {
//   Room,
//   RoomEvent,
//   VideoPresets,
//   createLocalTracks,
// } from "livekit-client";

// const LiveKitWidget = () => {
//   const [isConnecting, setIsConnecting] = useState(false);
//   const [connected, setConnected] = useState(false);
//   const [roomInstance, setRoomInstance] = useState(null);

//   const wsURL = import.meta.env.VITE_LIVEKIT_URL;
//   const tokenEndpoint = import.meta.env.VITE_TOKEN_API;

//   const joinRoom = async () => {
//     setIsConnecting(true);
//     try {
//       // 1️⃣ Fetch token
//       const response = await fetch(tokenEndpoint, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           session_id: "abcd1234",
//           name: "John Doe",
//           phone_number: "+911234567890",
//           email: "john@example.com",
//           mode: "web",
//         }),
//       });

//       if (!response.ok) throw new Error("Token request failed");
//       const { token } = await response.json();
//       if (!token) throw new Error("No token returned");

//       // 2️⃣ Create room
//       const room = new Room({
//         adaptiveStream: true,
//         dynacast: true,
//         publishDefaults: {
//           simulcast: true,
//           videoSimulcastLayers: [VideoPresets.h180, VideoPresets.h360],
//           videoCodec: "vp8",
//         },
//         videoCaptureDefaults: {
//           resolution: VideoPresets.h720.resolution,
//         },
//       });

//       console.log("Connecting to LiveKit...");
//       await room.connect(wsURL, token, { autoSubscribe: true });
//       console.log("✅ Connected to LiveKit room");

//       // 3️⃣ Publish your audio/video
//       const localTracks = await createLocalTracks({
//         audio: true,
//         video: { facingMode: "user" },
//       });
//       for (const track of localTracks) {
//         await room.localParticipant.publishTrack(track);
//       }
//       console.log("🎙️ Mic + 🎥 Camera published");

//       // 4️⃣ Handle remote participant audio/video
//       room.on(RoomEvent.TrackSubscribed, async (track, publication, participant) => {
//         console.log(`🎬 Subscribed to ${track.kind} from ${participant.identity}`);

//         if (track.kind === "audio") {
//           // ✅ Ensure clean audio element
//           const audioEl = document.createElement("audio");
//           audioEl.autoplay = true;
//           audioEl.controls = false;
//           audioEl.srcObject = new MediaStream([track.mediaStreamTrack]);

//           try {
//             await audioEl.play();
//           } catch (err) {
//             console.warn("⚠️ Audio blocked, resuming context...");
//             const ctx = new (window.AudioContext || window.webkitAudioContext)();
//             await ctx.resume();
//             await audioEl.play();
//           }

//           document.getElementById("livekit-audio-container").appendChild(audioEl);
//         } else if (track.kind === "video") {
//           const videoEl = track.attach();
//           document.getElementById("livekit-video-container").appendChild(videoEl);
//         }
//       });

//       // 5️⃣ Handle disconnect events
//       room
//         .on(RoomEvent.ParticipantDisconnected, (p) =>
//           console.log(`❌ ${p.identity} left`)
//         )
//         .on(RoomEvent.Disconnected, () => {
//           console.log("🚪 Disconnected from room");
//           setConnected(false);
//           setRoomInstance(null);
//         });

//       // ✅ Self-view (optional small preview)
//       const previewTrack = localTracks.find((t) => t.kind === "video");
//       if (previewTrack) {
//         const videoEl = previewTrack.attach();
//         videoEl.muted = true;
//         videoEl.style.width = "200px";
//         videoEl.style.borderRadius = "10px";
//         document.getElementById("livekit-video-container").appendChild(videoEl);
//       }

//       setRoomInstance(room);
//       setConnected(true);
//     } catch (err) {
//       console.error("❌ Failed to connect:", err);
//       alert("Failed to connect to LiveKit room. See console for details.");
//     } finally {
//       setIsConnecting(false);
//     }
//   };

//   const leaveRoom = async () => {
//     if (!roomInstance) return;
//     console.log("👋 Leaving room...");
//     try {
//       await roomInstance.disconnect();
//       roomInstance.localParticipant.tracks.forEach((pub) => pub.track?.stop());
//     } catch (err) {
//       console.error("Error disconnecting:", err);
//     }

//     document.getElementById("livekit-video-container").innerHTML = "";
//     document.getElementById("livekit-audio-container").innerHTML = "";

//     setConnected(false);
//     setRoomInstance(null);
//     alert("Call ended.");
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "30px" }}>
//       {!connected ? (
//         <button
//           onClick={joinRoom}
//           disabled={isConnecting}
//           style={{
//             background: "#dc0d29",
//             color: "white",
//             padding: "15px 40px",
//             border: "none",
//             borderRadius: "5px",
//             fontSize: "16px",
//             fontWeight: "bold",
//             cursor: "pointer",
//           }}
//         >
//           {isConnecting ? "Connecting..." : "Join Call"}
//         </button>
//       ) : (
//         <div>
//           <p style={{ color: "green", fontWeight: "bold" }}>
//             ✅ Connected to LiveKit Room
//           </p>
//           <button
//             onClick={leaveRoom}
//             style={{
//               background: "#333",
//               color: "white",
//               padding: "12px 35px",
//               border: "none",
//               borderRadius: "5px",
//               fontSize: "15px",
//               fontWeight: "bold",
//               cursor: "pointer",
//               marginTop: "10px",
//             }}
//           >
//             🚪 Leave Call
//           </button>
//         </div>
//       )}

//       {/* Video + Audio Containers */}
//       <div
//         id="livekit-video-container"
//         style={{
//           marginTop: "20px",
//           display: "flex",
//           justifyContent: "center",
//           flexWrap: "wrap",
//           gap: "10px",
//         }}
//       ></div>

//       <div id="livekit-audio-container"></div>
//     </div>
//   );
// };

// export default LiveKitWidget;

 
// import React, { useState, useEffect } from "react";
// import {
//   Room,
//   RoomEvent,
//   VideoPresets,
//   createLocalTracks,
// } from "livekit-client";

// const LiveKitWidget = () => {
//   const [isConnecting, setIsConnecting] = useState(false);
//   const [connected, setConnected] = useState(false);
//   const [roomInstance, setRoomInstance] = useState(null);
//   const [showForm, setShowForm] = useState(false);
//   const [isRequestingCallback, setIsRequestingCallback] = useState(false);
//   const [cooldown, setCooldown] = useState(0); // cooldown timer

//   const [formData, setFormData] = useState({
//     name: "",
//     phone_number: "",
//     email: "",
//   });
//   const [phoneError, setPhoneError] = useState("");
//   const [emailError, setEmailError] = useState("");

//   // 🔗 Environment URLs
//   const wsURL = import.meta.env.VITE_LIVEKIT_URL;
//   const tokenEndpoint = import.meta.env.VITE_TOKEN_API;
//   const callbackEndpoint = import.meta.env.VITE_CALLBACK_API;

//   // ---------------- HANDLE INPUT CHANGE ----------------
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;

//     if (name === "phone_number") {
//       const onlyNumbers = value.replace(/\D/g, "");
//       setFormData((prev) => ({ ...prev, phone_number: onlyNumbers }));

//       if (onlyNumbers.length > 10) {
//         setPhoneError("Phone number cannot exceed 10 digits");
//       } else if (onlyNumbers.length < 10 && onlyNumbers.length > 0) {
//         setPhoneError("Phone number must be 10 digits");
//       } else {
//         setPhoneError("");
//       }
//       return;
//     }

//     if (name === "email") {
//       setFormData((prev) => ({ ...prev, email: value }));
//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       setEmailError(value && !emailRegex.test(value) ? "Please enter a valid email" : "");
//       return;
//     }

//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   // ---------------- COOLDOWN TIMER ----------------
//   useEffect(() => {
//     if (cooldown > 0) {
//       const timer = setTimeout(() => setCooldown(cooldown - 1), 1000);
//       return () => clearTimeout(timer);
//     }
//   }, [cooldown]);

//   // ---------------- REQUEST CALLBACK ----------------
//   const requestCallback = async () => {
//     // prevent multiple presses during cooldown
//     if (cooldown > 0) {
//       alert(`Please wait ${cooldown} seconds before requesting again.`);
//       return;
//     }

//     if (!formData.name || !formData.phone_number || !formData.email) {
//       alert("Please fill all fields before requesting a callback.");
//       return;
//     }
//     if (formData.phone_number.length !== 10) {
//       alert("Phone number must be exactly 10 digits.");
//       return;
//     }
//     if (emailError) {
//       alert("Please enter a valid email.");
//       return;
//     }

//     setIsRequestingCallback(true);
//     try {
//       const payload = {
//         name: formData.name,
//         phone_number: `+91${formData.phone_number}`,
//         email: formData.email,
//       };

//       const res = await fetch(callbackEndpoint, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       if (!res.ok) throw new Error("Callback API failed");

//       alert("✅ Callback request sent successfully!");
//       setCooldown(60); // start 60 seconds cooldown
//     } catch (err) {
//       console.error("❌ Callback error:", err);
//       alert("Failed to send callback request. Please try again.");
//     } finally {
//       setIsRequestingCallback(false);
//     }
//   };

//   // ---------------- JOIN ROOM ----------------
//   const joinRoom = async () => {
//     if (connected || isConnecting) {
//       alert("You are already in a call or connecting...");
//       return;
//     }

//     if (!formData.name || !formData.phone_number || !formData.email) {
//       alert("Please fill in all details before joining the call.");
//       return;
//     }
//     if (formData.phone_number.length !== 10) {
//       alert("Phone number must be exactly 10 digits.");
//       return;
//     }
//     if (emailError) {
//       alert("Please enter a valid email.");
//       return;
//     }

//     setIsConnecting(true);
//     try {
//       const payload = {
//         session_id: "abcd1234",
//         name: formData.name,
//         phone_number: `+91${formData.phone_number}`,
//         email: formData.email,
//         mode: "web",
//       };

//       const response = await fetch(tokenEndpoint, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       if (!response.ok) throw new Error("Token request failed");
//       const { token } = await response.json();
//       if (!token) throw new Error("No token returned from server");

//       const room = new Room({
//         adaptiveStream: true,
//         dynacast: true,
//         publishDefaults: {
//           simulcast: true,
//           videoSimulcastLayers: [VideoPresets.h180, VideoPresets.h360],
//           videoCodec: "vp8",
//         },
//         videoCaptureDefaults: {
//           resolution: VideoPresets.h720.resolution,
//         },
//       });

//       console.log("Connecting to LiveKit...");
//       await room.connect(wsURL, token, { autoSubscribe: true });
//       console.log("✅ Connected to LiveKit");

//       const localTracks = await createLocalTracks({
//         audio: true,
//         video: { facingMode: "user" },
//       });
//       for (const track of localTracks)
//         await room.localParticipant.publishTrack(track);

//       room.on(RoomEvent.TrackSubscribed, async (track) => {
//         if (track.kind === "audio") {
//           const audioEl = document.createElement("audio");
//           audioEl.autoplay = true;
//           audioEl.srcObject = new MediaStream([track.mediaStreamTrack]);
//           document.getElementById("livekit-audio-container").appendChild(audioEl);
//         } else if (track.kind === "video") {
//           const videoEl = track.attach();
//           document.getElementById("livekit-video-container").appendChild(videoEl);
//         }
//       });

//       room.on(RoomEvent.Disconnected, () => {
//         console.log("🚪 Disconnected");
//         setConnected(false);
//         setRoomInstance(null);
//       });

//       const previewTrack = localTracks.find((t) => t.kind === "video");
//       if (previewTrack) {
//         const videoEl = previewTrack.attach();
//         videoEl.muted = true;
//         videoEl.style.width = "200px";
//         videoEl.style.borderRadius = "10px";
//         document.getElementById("livekit-video-container").appendChild(videoEl);
//       }

//       setRoomInstance(room);
//       setConnected(true);
//       setShowForm(false);
//     } catch (err) {
//       console.error("❌ Failed to connect:", err);
//       alert("Failed to connect to LiveKit room.");
//     } finally {
//       setIsConnecting(false);
//     }
//   };

//   // ---------------- LEAVE ROOM ----------------
//   const leaveRoom = async () => {
//     if (!roomInstance) return;
//     console.log("👋 Leaving room...");
//     try {
//       await roomInstance.disconnect();
//       roomInstance.localParticipant.tracks.forEach((pub) => pub.track?.stop());
//     } catch (err) {
//       console.error("Error disconnecting:", err);
//     }

//     document.getElementById("livekit-video-container").innerHTML = "";
//     document.getElementById("livekit-audio-container").innerHTML = "";
//     setConnected(false);
//     setRoomInstance(null);
//     alert("Call ended.");
//   };

//   // ---------------- HANDLE PAGE RELOAD (Auto Leave) ----------------
//   useEffect(() => {
//     const handleBeforeUnload = async () => {
//       if (roomInstance) {
//         console.log("🔄 Page reloading... disconnecting from LiveKit");
//         try {
//           await roomInstance.disconnect();
//           roomInstance.localParticipant.tracks.forEach((pub) => pub.track?.stop());
//         } catch (err) {
//           console.error("Error while auto-leaving room:", err);
//         }
//       }
//     };

//     window.addEventListener("beforeunload", handleBeforeUnload);
//     return () => {
//       window.removeEventListener("beforeunload", handleBeforeUnload);
//     };
//   }, [roomInstance]);

//   // ---------------- UI ----------------
//   return (
//     <div style={{ textAlign: "center", marginTop: "30px" }}>
//       {!connected && !showForm && (
//         <button
//           onClick={() => setShowForm(true)}
//           style={{
//             background: "#007bff",
//             color: "white",
//             padding: "15px 40px",
//             border: "none",
//             borderRadius: "5px",
//             fontSize: "16px",
//             fontWeight: "bold",
//             cursor: "pointer",
//           }}
//         >
//           Open Join Form
//         </button>
//       )}

//       {!connected && showForm && (
//         <div
//           style={{
//             marginTop: "20px",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             gap: "10px",
//           }}
//         >
//           <input
//             type="text"
//             name="name"
//             placeholder="Enter your name"
//             value={formData.name}
//             onChange={handleInputChange}
//             style={{ padding: "10px", width: "250px", borderRadius: "5px" }}
//           />

//           <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
//             <span
//               style={{
//                 background: "#9f5353",
//                 padding: "10px 12px",
//                 borderRadius: "5px",
//                 fontWeight: "bold",
//               }}
//             >
//               +91
//             </span>
//             <input
//               type="text"
//               name="phone_number"
//               placeholder="10-digit mobile number"
//               value={formData.phone_number}
//               onChange={handleInputChange}
//               style={{
//                 padding: "10px",
//                 width: "180px",
//                 borderRadius: "5px",
//                 border: phoneError ? "1px solid red" : "1px solid #ccc",
//               }}
//               maxLength="10"
//             />
//           </div>
//           {phoneError && <p style={{ color: "red", fontSize: "13px" }}>{phoneError}</p>}

//           <input
//             type="email"
//             name="email"
//             placeholder="Enter your email"
//             value={formData.email}
//             onChange={handleInputChange}
//             style={{
//               padding: "10px",
//               width: "250px",
//               borderRadius: "5px",
//               border: emailError ? "1px solid red" : "1px solid #ccc",
//             }}
//           />
//           {emailError && <p style={{ color: "red", fontSize: "13px" }}>{emailError}</p>}

//           {/* Callback Button with Cooldown */}
//           <button
//             onClick={requestCallback}
//             disabled={isRequestingCallback || cooldown > 0}
//             style={{
//               background: "#ff9800",
//               color: "white",
//               padding: "12px 35px",
//               border: "none",
//               borderRadius: "5px",
//               fontSize: "15px",
//               fontWeight: "bold",
//               cursor: "pointer",
//               marginBottom: "5px",
//               opacity: isRequestingCallback || cooldown > 0 ? 0.6 : 1,
//             }}
//           >
//             {isRequestingCallback
//               ? "Requesting..."
//               : cooldown > 0
//                 ? `Wait ${cooldown}s`
//                 : "📞 Request Callback"}
//           </button>

//           <button
//             onClick={connected ? leaveRoom : joinRoom}
//             disabled={isConnecting}
//             style={{
//               background: connected ? "#dc3545" : "#28a745",
//               color: "white",
//               padding: "12px 35px",
//               border: "none",
//               borderRadius: "5px",
//               fontSize: "15px",
//               fontWeight: "bold",
//               cursor: "pointer",
//             }}
//           >
//             {isConnecting
//               ? "Connecting..."
//               : connected
//                 ? "🚪 Leave Call"
//                 : "Join Call"}
//           </button>

//           <button
//             onClick={() => setShowForm(false)}
//             style={{
//               background: "#999",
//               color: "white",
//               padding: "8px 20px",
//               border: "none",
//               borderRadius: "5px",
//               cursor: "pointer",
//             }}
//           >
//             Cancel
//           </button>
//         </div>
//       )}

//       {connected && (
//         <p style={{ color: "green", fontWeight: "bold", marginTop: "10px" }}>
//           ✅ Connected to LiveKit Room
//         </p>
//       )}

//       <div
//         id="livekit-video-container"
//         style={{
//           marginTop: "20px",
//           display: "flex",
//           justifyContent: "center",
//           flexWrap: "wrap",
//           gap: "10px",
//         }}
//       ></div>

//       <div id="livekit-audio-container"></div>
//     </div>
//   );
// };

// export default LiveKitWidget;


// import React, { useState, useEffect } from "react";
// import {
//   Room,
//   RoomEvent,
//   VideoPresets,
//   createLocalTracks,
// } from "livekit-client";

// const LiveKitWidget = () => {
//   const [isConnecting, setIsConnecting] = useState(false);
//   const [connected, setConnected] = useState(false);
//   const [roomInstance, setRoomInstance] = useState(null);
//   const [showForm, setShowForm] = useState(false);
//   const [isRequestingCallback, setIsRequestingCallback] = useState(false);
//   const [cooldown, setCooldown] = useState(0);

//   const [formData, setFormData] = useState({
//     name: "",
//     phone_number: "",
//     email: "",
//   });
//   const [phoneError, setPhoneError] = useState("");
//   const [emailError, setEmailError] = useState("");

//   // 🔗 Environment URLs
//   const wsURL = import.meta.env.VITE_LIVEKIT_URL;
//   const tokenEndpoint = import.meta.env.VITE_TOKEN_API;
//   const callbackEndpoint = import.meta.env.VITE_CALLBACK_API;

//   // ---------------- HANDLE INPUT CHANGE ----------------
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;

//     if (name === "phone_number") {
//       const onlyNumbers = value.replace(/\D/g, "");
//       setFormData((prev) => ({ ...prev, phone_number: onlyNumbers }));

//       if (onlyNumbers.length > 10) {
//         setPhoneError("Phone number cannot exceed 10 digits");
//       } else if (onlyNumbers.length < 10 && onlyNumbers.length > 0) {
//         setPhoneError("Phone number must be 10 digits");
//       } else {
//         setPhoneError("");
//       }
//       return;
//     }

//     if (name === "email") {
//       setFormData((prev) => ({ ...prev, email: value }));
//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       setEmailError(value && !emailRegex.test(value) ? "Please enter a valid email" : "");
//       return;
//     }

//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   // ---------------- COOLDOWN TIMER ----------------
//   useEffect(() => {
//     if (cooldown > 0) {
//       const timer = setTimeout(() => setCooldown(cooldown - 1), 1000);
//       return () => clearTimeout(timer);
//     }
//   }, [cooldown]);

//   // ---------------- REQUEST CALLBACK ----------------
//   const requestCallback = async () => {
//     if (cooldown > 0) {
//       alert(`Please wait ${cooldown} seconds before requesting again.`);
//       return;
//     }

//     if (!formData.name || !formData.phone_number || !formData.email) {
//       alert("Please fill all fields before requesting a callback.");
//       return;
//     }
//     if (formData.phone_number.length !== 10) {
//       alert("Phone number must be exactly 10 digits.");
//       return;
//     }
//     if (emailError) {
//       alert("Please enter a valid email.");
//       return;
//     }

//     setIsRequestingCallback(true);
//     try {
//       const payload = {
//         name: formData.name,
//         phone_number: `+91${formData.phone_number}`,
//         email: formData.email,
//       };

//       const res = await fetch(callbackEndpoint, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       if (!res.ok) throw new Error("Callback API failed");

//       alert("✅ Callback request sent successfully!");
//       setCooldown(60);
//     } catch (err) {
//       console.error("❌ Callback error:", err);
//       alert("Failed to send callback request. Please try again.");
//     } finally {
//       setIsRequestingCallback(false);
//     }
//   };

//   // ---------------- JOIN ROOM ----------------
//   const joinRoom = async () => {
//     if (connected || isConnecting) {
//       alert("You are already in a call or connecting...");
//       return;
//     }

//     if (!formData.name || !formData.phone_number || !formData.email) {
//       alert("Please fill in all details before joining the call.");
//       return;
//     }
//     if (formData.phone_number.length !== 10) {
//       alert("Phone number must be exactly 10 digits.");
//       return;
//     }
//     if (emailError) {
//       alert("Please enter a valid email.");
//       return;
//     }

//     setIsConnecting(true);
//     try {
//       const payload = {
//         session_id: "abcd1234",
//         name: formData.name,
//         phone_number: `+91${formData.phone_number}`,
//         email: formData.email,
//         mode: "web",
//       };

//       const response = await fetch(tokenEndpoint, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       if (!response.ok) throw new Error("Token request failed");
//       const { token } = await response.json();
//       if (!token) throw new Error("No token returned from server");

//       const room = new Room({
//         adaptiveStream: true,
//         dynacast: true,
//         publishDefaults: {
//           simulcast: true,
//           videoSimulcastLayers: [VideoPresets.h180, VideoPresets.h360],
//           videoCodec: "vp8",
//         },
//         videoCaptureDefaults: {
//           resolution: VideoPresets.h720.resolution,
//         },
//       });

//       console.log("Connecting to LiveKit...");
//       await room.connect(wsURL, token, { autoSubscribe: true });
//       console.log("✅ Connected to LiveKit");

//       const localTracks = await createLocalTracks({
//         audio: true,
//         video: { facingMode: "user" },
//       });
//       for (const track of localTracks)
//         await room.localParticipant.publishTrack(track);

//       room.on(RoomEvent.TrackSubscribed, async (track) => {
//         if (track.kind === "audio") {
//           const audioEl = document.createElement("audio");
//           audioEl.autoplay = true;
//           audioEl.srcObject = new MediaStream([track.mediaStreamTrack]);
//           document.getElementById("livekit-audio-container").appendChild(audioEl);
//         } else if (track.kind === "video") {
//           const videoEl = track.attach();
//           document.getElementById("livekit-video-container").appendChild(videoEl);
//         }
//       });

//       room.on(RoomEvent.Disconnected, () => {
//         console.log("🚪 Disconnected");
//         setConnected(false);
//         setRoomInstance(null);
//       });

//       const previewTrack = localTracks.find((t) => t.kind === "video");
//       if (previewTrack) {
//         const videoEl = previewTrack.attach();
//         videoEl.muted = true;
//         videoEl.style.width = "200px";
//         videoEl.style.borderRadius = "10px";
//         document.getElementById("livekit-video-container").appendChild(videoEl);
//       }

//       setRoomInstance(room);
//       setConnected(true);
//       setShowForm(false);
//     } catch (err) {
//       console.error("❌ Failed to connect:", err);
//       alert("Failed to connect to LiveKit room.");
//     } finally {
//       setIsConnecting(false);
//     }
//   };

//   // ---------------- LEAVE ROOM ----------------
//   const leaveRoom = async () => {
//     if (!roomInstance) return;
//     console.log("👋 Leaving room...");
//     try {
//       await roomInstance.disconnect();
//       roomInstance.localParticipant.tracks.forEach((pub) => pub.track?.stop());
//     } catch (err) {
//       console.error("Error disconnecting:", err);
//     }

//     document.getElementById("livekit-video-container").innerHTML = "";
//     document.getElementById("livekit-audio-container").innerHTML = "";
//     setConnected(false);
//     setRoomInstance(null);
//     alert("Call ended.");
//   };

//   // ---------------- AUTO DISCONNECT ON RELOAD ----------------
//   useEffect(() => {
//     const handleBeforeUnload = async () => {
//       if (roomInstance) {
//         try {
//           await roomInstance.disconnect();
//           roomInstance.localParticipant.tracks.forEach((pub) => pub.track?.stop());
//         } catch (err) {
//           console.error("Error while auto-leaving room:", err);
//         }
//       }
//     };
//     window.addEventListener("beforeunload", handleBeforeUnload);
//     return () => {
//       window.removeEventListener("beforeunload", handleBeforeUnload);
//     };
//   }, [roomInstance]);

//   // ---------------- UI ----------------
//   return (
//     <div style={{ textAlign: "center", marginTop: "20px" }}>
//       {!connected && !showForm && (
//         <button
//           onClick={() => setShowForm(true)}
//           style={{
//             background: "#dc0d29",
//             color: "#fff",
//             padding: "14px 36px",
//             border: "none",
//             borderRadius: "8px",
//             fontSize: "16px",
//             fontWeight: "600",
//             cursor: "pointer",
//           }}
//         >
//           Join Call
//         </button>
//       )}

//       {/* Centered Modal Form */}
//       {showForm && !connected && (
//         <div
//           style={{
//             position: "fixed",
//             top: "0",
//             left: "0",
//             width: "100%",
//             height: "100vh",
//             background: "rgba(0,0,0,0.6)",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             zIndex: 1000,
//           }}
//         >
//           <div
//             style={{
//               background: "#fff",
//               padding: "30px 40px",
//               borderRadius: "12px",
//               width: "350px",
//               textAlign: "center",
//               boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
//             }}
//           >
//             <h2 style={{ color: "#dc0d29", marginBottom: "20px" }}>Join Live Call</h2>

//             <input
//               type="text"
//               name="name"
//               placeholder="Full Name"
//               value={formData.name}
//               onChange={handleInputChange}
//               style={{
//                 width: "100%",
//                 padding: "10px",
//                 marginBottom: "10px",
//                 borderRadius: "6px",
//                 border: "1px solid #ccc",
//               }}
//             />

//             <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
//               <span
//                 style={{
//                   background: "#dc0d29",
//                   color: "#fff",
//                   padding: "10px 12px",
//                   borderRadius: "6px 0 0 6px",
//                 }}
//               >
//                 +91
//               </span>
//               <input
//                 type="text"
//                 name="phone_number"
//                 placeholder="10-digit phone"
//                 value={formData.phone_number}
//                 onChange={handleInputChange}
//                 maxLength="10"
//                 style={{
//                   flex: 1,
//                   padding: "10px",
//                   borderRadius: "0 6px 6px 0",
//                   border: phoneError ? "1px solid red" : "1px solid #ccc",
//                 }}
//               />
//             </div>
//             {phoneError && <p style={{ color: "red", fontSize: "12px" }}>{phoneError}</p>}

//             <input
//               type="email"
//               name="email"
//               placeholder="Email Address"
//               value={formData.email}
//               onChange={handleInputChange}
//               style={{
//                 width: "100%",
//                 padding: "10px",
//                 marginBottom: "10px",
//                 borderRadius: "6px",
//                 border: emailError ? "1px solid red" : "1px solid #ccc",
//               }}
//             />
//             {emailError && <p style={{ color: "red", fontSize: "12px" }}>{emailError}</p>}

//             <button
//               onClick={requestCallback}
//               disabled={isRequestingCallback || cooldown > 0}
//               style={{
//                 width: "100%",
//                 background: "#dc0d29",
//                 color: "#fff",
//                 padding: "10px",
//                 border: "none",
//                 borderRadius: "6px",
//                 fontWeight: "bold",
//                 cursor: "pointer",
//                 marginBottom: "10px",
//                 opacity: isRequestingCallback || cooldown > 0 ? 0.6 : 1,
//               }}
//             >
//               {isRequestingCallback
//                 ? "Requesting..."
//                 : cooldown > 0
//                 ? `Wait ${cooldown}s`
//                 : "📞 Request Callback"}
//             </button>

//             <button
//               onClick={connected ? leaveRoom : joinRoom}
//               disabled={isConnecting}
//               style={{
//                 width: "100%",
//                 background: "#dc0d29",
//                 color: "#fff",
//                 padding: "10px",
//                 border: "none",
//                 borderRadius: "6px",
//                 fontWeight: "bold",
//                 cursor: "pointer",
//                 marginBottom: "10px",
//               }}
//             >
//               {isConnecting ? "Connecting..." : "Join Call"}
//             </button>

//             <button
//               onClick={() => setShowForm(false)}
//               style={{
//                 width: "100%",
//                 background: "#999",
//                 color: "#fff",
//                 padding: "8px",
//                 border: "none",
//                 borderRadius: "6px",
//                 cursor: "pointer",
//               }}
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}

//       {connected && (
//         <p style={{ color: "green", fontWeight: "bold", marginTop: "10px" }}>
//           ✅ Connected to LiveKit Room
//         </p>
//       )}

//       <div
//         id="livekit-video-container"
//         style={{
//           marginTop: "20px",
//           display: "flex",
//           justifyContent: "center",
//           flexWrap: "wrap",
//           gap: "10px",
//         }}
//       ></div>

//       <div id="livekit-audio-container"></div>
//     </div>
//   );
// };

// export default LiveKitWidget;


import React, { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import {
  Room,
  RoomEvent,
  VideoPresets,
  createLocalTracks,
} from "livekit-client";

const LiveKitWidget = () => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [connected, setConnected] = useState(false);
  const [roomInstance, setRoomInstance] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [isRequestingCallback, setIsRequestingCallback] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    phone_number: "",
    email: "",
  });
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isMicOn, setIsMicOn] = useState(true);

  // 🔗 Environment URLs
  const wsURL = import.meta.env.VITE_LIVEKIT_URL;
  const tokenEndpoint = import.meta.env.VITE_TOKEN_API;
  const callbackEndpoint = import.meta.env.VITE_CALLBACK_API;

  // ---------------- INPUT CHANGE ----------------
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone_number") {
      const onlyNumbers = value.replace(/\D/g, "");
      setFormData((prev) => ({ ...prev, phone_number: onlyNumbers }));

      if (onlyNumbers.length > 10) {
        setPhoneError("Phone number cannot exceed 10 digits");
      } else if (onlyNumbers.length < 10 && onlyNumbers.length > 0) {
        setPhoneError("Phone number must be 10 digits");
      } else {
        setPhoneError("");
      }
      return;
    }

    if (name === "email") {
      setFormData((prev) => ({ ...prev, email: value }));
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setEmailError(value && !emailRegex.test(value) ? "Please enter a valid email" : "");
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ---------------- COOLDOWN TIMER ----------------
  useEffect(() => {
    if (cooldown > 0) {
      const timer = setTimeout(() => setCooldown(cooldown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [cooldown]);

  // ---------------- CALLBACK REQUEST ----------------
  const requestCallback = async () => {
    if (cooldown > 0) {
      alert(`Please wait ${cooldown} seconds before requesting again.`);
      return;
    }

    if (!formData.name || !formData.phone_number || !formData.email) {
      alert("Please fill all fields before requesting a callback.");
      return;
    }
    if (formData.phone_number.length !== 10) {
      alert("Phone number must be exactly 10 digits.");
      return;
    }
    if (emailError) {
      alert("Please enter a valid email.");
      return;
    }

    setIsRequestingCallback(true);
    try {
      const payload = {
        name: formData.name,
        phone_number: `+91${formData.phone_number}`,
        email: formData.email,
      };

      const res = await fetch(callbackEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Callback API failed");

      alert("✅ Callback request sent successfully!");
      setCooldown(60);
    } catch (err) {
      console.error("❌ Callback error:", err);
      alert("Failed to send callback request. Please try again.");
    } finally {
      setIsRequestingCallback(false);
    }
  };

  // ---------------- JOIN ROOM ----------------
  const joinRoom = async () => {
    if (connected || isConnecting) {
      alert("You are already in a call or connecting...");
      return;
    }

    if (!formData.name || !formData.phone_number || !formData.email) {
      alert("Please fill in all details before joining the call.");
      return;
    }
    if (formData.phone_number.length !== 10) {
      alert("Phone number must be exactly 10 digits.");
      return;
    }
    if (emailError) {
      alert("Please enter a valid email.");
      return;
    }

    setIsConnecting(true);
    try {
      const payload = {
        session_id: "abcd1234",
        name: formData.name,
        phone_number: `+91${formData.phone_number}`,
        email: formData.email,
        mode: "web",
      };

      const response = await fetch(tokenEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Token request failed");
      const { token } = await response.json();
      if (!token) throw new Error("No token returned from server");

      const room = new Room({
        adaptiveStream: true,
        dynacast: true,
        publishDefaults: {
          simulcast: true,
          videoSimulcastLayers: [VideoPresets.h180, VideoPresets.h360],
          videoCodec: "vp8",
        },
        videoCaptureDefaults: {
          resolution: VideoPresets.h720.resolution,
        },
      });

      console.log("Connecting to LiveKit...");
      await room.connect(wsURL, token, { autoSubscribe: true });
      console.log("✅ Connected to LiveKit");

      const localTracks = await createLocalTracks({
        audio: true,
        video: { facingMode: "user" },
      });
      for (const track of localTracks)
        await room.localParticipant.publishTrack(track);

      room.on(RoomEvent.TrackSubscribed, async (track) => {
        if (track.kind === "audio") {
          const audioEl = document.createElement("audio");
          audioEl.autoplay = true;
          audioEl.srcObject = new MediaStream([track.mediaStreamTrack]);
          document.getElementById("livekit-audio-container").appendChild(audioEl);
        } else if (track.kind === "video") {
          const videoEl = track.attach();
          document.getElementById("livekit-video-container").appendChild(videoEl);
        }
      });

      room.on(RoomEvent.Disconnected, () => {
        setConnected(false);
        setRoomInstance(null);
      });

      setRoomInstance(room);
      setConnected(true);
      setShowForm(false);
    } catch (err) {
      console.error("❌ Failed to connect:", err);
      alert("Failed to connect to LiveKit room.");
    } finally {
      setIsConnecting(false);
    }
  };

  // ---------------- AUTO LEAVE ----------------
  useEffect(() => {
    const handleBeforeUnload = async () => {
      if (roomInstance) {
        try {
          await roomInstance.disconnect();
          roomInstance.localParticipant.tracks.forEach((pub) => pub.track?.stop());
        } catch (err) {
          console.error("Error while auto-leaving room:", err);
        }
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [roomInstance]);

  // ---------------- UI ----------------
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {!connected && !showForm && (
  <button
    onClick={() => setShowForm(true)}
    style={{
      position: "fixed",
      bottom: "24px",
      right: "24px",
      background: "#dc0d29",
      color: "#fff",
      border: "none",
      borderRadius: "50%",
      width: "60px",
      height: "60px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
      cursor: "pointer",
      transition: "all 0.3s ease",
      zIndex: 1000,
    }}
    title="Join Call"
  >
    <Phone size={28} />
  </button>
)}

      {/* Modal Form */}
      {showForm && !connected && (
      <div
      onClick={() => setShowForm(false)} 
      style={{
      position: "fixed",
      top: "0",
      left: "0",
      width: "100%",
      height: "100vh",
      background: "rgba(0,0,0,0.55)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    }}
    >
    <div
      onClick={(e) => e.stopPropagation()} 
      style={{
        background: "#fff",
        padding: "30px 35px",
        borderRadius: "12px",
        width: "380px",
        textAlign: "center",
        boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
      }}
     >
            <h2
              style={{
                color: "#dc0d29",
                marginBottom: "6px",
                fontSize: "22px",
                fontWeight: "700",
              }}
            >
              Join a Live Consultation
            </h2>
            <p style={{ color: "#666", fontSize: "14px", marginBottom: "20px" }}>
              Please enter your details to connect securely with our representative.
            </p>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: "10px 12px",
                marginBottom: "10px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                fontSize: "14px",
                background: "#fafafa",
              }}
            />

            <div style={{ display: "flex", marginBottom: "10px" }}>
              <span
                style={{
                  background: "#dc0d29",
                  color: "#fff",
                  padding: "10px 12px",
                  borderRadius: "6px 0 0 6px",
                  fontSize: "14px",
                }}
              >
                +91
              </span>
              <input
                type="text"
                name="phone_number"
                placeholder="10-digit phone"
                value={formData.phone_number}
                onChange={handleInputChange}
                maxLength="10"
                style={{
                  flex: 1,
                  padding: "10px 12px",
                  borderRadius: "0 6px 6px 0",
                  border: phoneError ? "1px solid red" : "1px solid #ccc",
                  background: "#fafafa",
                  fontSize: "14px",
                }}
              />
            </div>
            {phoneError && (
              <p style={{ color: "red", fontSize: "12px", marginBottom: "5px" }}>{phoneError}</p>
            )}

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: "10px 12px",
                marginBottom: "10px",
                borderRadius: "6px",
                border: emailError ? "1px solid red" : "1px solid #ccc",
                background: "#fafafa",
                fontSize: "14px",
              }}
            />
            {emailError && (
              <p style={{ color: "red", fontSize: "12px", marginBottom: "5px" }}>{emailError}</p>
            )}

            <button
              onClick={requestCallback}
              disabled={isRequestingCallback || cooldown > 0}
              style={{
                width: "100%",
                background: "#ffe3e6",
                color: "#dc0d29",
                padding: "8px",
                border: "1px solid #dc0d29",
                borderRadius: "6px",
                fontSize: "13px",
                fontWeight: "600",
                cursor: "pointer",
                marginBottom: "8px",
                opacity: isRequestingCallback || cooldown > 0 ? 0.6 : 1,
              }}
            >
              {isRequestingCallback
                ? "Requesting..."
                : cooldown > 0
                ? `Wait ${cooldown}s`
                : "📞 Request Callback"}
            </button>

            <button
              onClick={connected ? null : joinRoom}
              disabled={isConnecting}
              style={{
                width: "100%",
                background: "#dc0d29",
                color: "#fff",
                padding: "8px",
                border: "none",
                borderRadius: "6px",
                fontSize: "13px",
                fontWeight: "600",
                cursor: "pointer",
                marginBottom: "8px",
              }}
            >
              {isConnecting ? "Connecting..." : "Join Call"}
            </button>

            <button
              onClick={() => setShowForm(false)}
              style={{
                width: "100%",
                background: "transparent",
                color: "#666",
                border: "none",
                fontSize: "13px",
                cursor: "pointer",
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {connected && (
        <p style={{ color: "green", fontWeight: "bold", marginTop: "10px" }}>
          ✅ Connected to LiveKit Room
        </p>
      )}

      {connected && (
    <button
    onClick={() => {
      if (roomInstance) {
        const localAudioTrack = Array.from(
          roomInstance.localParticipant.audioTracks.values()
        )[0]?.track;
        if (localAudioTrack) {
          if (isMicOn) localAudioTrack.mute();
          else localAudioTrack.unmute();
        }
      }
      setIsMicOn(!isMicOn);
    }}
    style={{
      background: isMicOn ? "#dc0d29" : "#aaa",
      color: "#fff",
      border: "none",
      borderRadius: "50%",
      width: "50px",
      height: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      position: "fixed",
      bottom: "100px",
      right: "24px",
      zIndex: 1000,
    }}
  >
    {isMicOn ? "🎙️" : "🔇"}
  </button>
)}

{connected && (
  <div style={{ position: "fixed", bottom: "170px", right: "32px" }}>
    {isMicOn ? (
      <div className="mic-wave">
        <span></span>
        <span></span>
        <span></span>
      </div>
    ) : (
      <div className="mic-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    )}
  </div>
)}

<style>
{`
.mic-wave {
  display: flex;
  align-items: flex-end;
  gap: 4px;
}
.mic-wave span {
  width: 4px;
  height: 8px;
  background: #dc0d29;
  border-radius: 2px;
  animation: wave 1s infinite ease-in-out;
}
.mic-wave span:nth-child(1) { animation-delay: 0s; }
.mic-wave span:nth-child(2) { animation-delay: 0.2s; }
.mic-wave span:nth-child(3) { animation-delay: 0.4s; }
@keyframes wave {
  0%, 100% { height: 6px; }
  50% { height: 16px; }
}
.mic-dots {
  display: flex;
  gap: 4px;
}
.mic-dots span {
  width: 6px;
  height: 6px;
  background: #888;
  border-radius: 50%;
}
`}
</style>

      <div
        id="livekit-video-container"
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "10px",
        }}
      ></div>

      <div id="livekit-audio-container"></div>
    </div>
  );
};

export default LiveKitWidget;
