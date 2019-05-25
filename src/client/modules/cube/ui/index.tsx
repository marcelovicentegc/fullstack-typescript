import * as React from "react";
import * as THREE from "three";
import "./main.scss";
import CubePopUpButton from "./components/CubePopUpButton";

export default class Cube extends React.Component {
  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  };
  stop = () => {
    cancelAnimationFrame(this.frameId);
  };
  animate = () => {
    this.cube.rotation.x += 0.014;
    this.cube.rotation.y += 0.01;
    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  };
  renderScene = () => {
    this.renderer.render(this.scene, this.camera);
  };
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  cube: THREE.Mesh;
  frameId: number;

  componentDidMount = () => {
    const width = this.mount.current.clientWidth;
    const height = this.mount.current.clientHeight;

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 4;

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setClearColor("#fff");
    this.renderer.setSize(width, height);
    this.mount.current.appendChild(this.renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({
      color: "#48acee",
      wireframe: true
    });
    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);

    this.start();
  };

  componentWillUnmount = () => {
    this.stop();
    this.mount.current.removeChild(this.renderer.domElement);
  };

  private mount = React.createRef<HTMLDivElement>();

  render() {
    return (
      <>
        <CubePopUpButton />
        <div className="cube" ref={this.mount} />
      </>
    );
  }
}
