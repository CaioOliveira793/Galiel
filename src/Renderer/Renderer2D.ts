import { mat4 as Mat4, vec2 as Vec2, vec3 as Vec3, vec4 as Vec4 } from 'gl-matrix';
import RendererCommand from './RendererCommand';
import VertexArray from './VertexArray';
import VertexBuffer from './VertexBuffer';
import IndexBuffer from './IndexBuffer';
import BufferLayout, { ShaderDataType } from './BufferLayout';
import UniformBuffer from './UniformBuffer';
import { OrthographicCamera, PerspectiveCamera } from './Camera';
import Shader from './Shader';
import { vertex, fragment } from './Materials/FlatColor';


class SceneData {
	public readonly viewProjectionMatrix: Mat4;

	public readonly buffer: ArrayBuffer;

	constructor(viewProjectionMatrix: Mat4) {
		this.viewProjectionMatrix = viewProjectionMatrix;

		const size = this.viewProjectionMatrix.length * 4;
		this.buffer = new ArrayBuffer(size);
		(new Float32Array(this.buffer)).set(this.viewProjectionMatrix);
	}
}


class Renderer2DData {
	public quadVertexArray: VertexArray;
	public flatColorShader: Shader;

	constructor() {
		this.quadVertexArray = new VertexArray();
		this.flatColorShader = new Shader(vertex, fragment);

		const vBuffer = new Float32Array([
			-1, -1, 0, // 0
			1,  -1, 0, // 1
			1,   1, 0, // 2
			-1,  1, 0, // 3
		]);

		const vertexBuffer = new VertexBuffer(vBuffer.length, vBuffer);
		vertexBuffer.setLayout(new BufferLayout([
			{ type: ShaderDataType.Float3 },
		]));

		this.quadVertexArray.addVertexBuffer(vertexBuffer);
		this.quadVertexArray.setIndexBuffer(new IndexBuffer(new Uint8Array([0, 1, 2, 3, 0, 2])));
	}

	public delete = (): void => {
		this.quadVertexArray.delete();
		this.flatColorShader.delete();
	}
}


class Renderer2D {
	public static init = (): void => {
		Renderer2D.data = new Renderer2DData();
		Renderer2D.sceneData = new SceneData(Mat4.create());
		Renderer2D.sceneDataUBuffer = new UniformBuffer(Renderer2D.sceneData.buffer.byteLength);
		Renderer2D.materialUBuffer = new UniformBuffer(16);
	}
	public static shutdown = (): void => {
		Renderer2D.data.delete();
	}

	public static beginScene = (camera: OrthographicCamera | PerspectiveCamera): void => {
		Renderer2D.sceneData = new SceneData(camera.getViewProjectionMatrix());
		Renderer2D.sceneDataUBuffer.setData(Renderer2D.sceneData.buffer);
		Renderer2D.data.flatColorShader.bind();
		Renderer2D.data.flatColorShader.uploadUniformBuffer('ub_Scene', Renderer2D.sceneDataUBuffer);
	}
	public static endScene = (): void => {
		///////////////////////////////////////////
	}


	public static drawQuad = (position: Vec2, size: Vec2, color: Vec4): void => {
		const transform = Mat4.create();
		Mat4.translate(transform, transform, Vec3.fromValues(position[0], position[1], 0));
		Mat4.scale(transform, transform, Vec3.fromValues(size[0], size[1], 0));

		Renderer2D.materialUBuffer.setData(new Float32Array(color));
		Renderer2D.data.flatColorShader.bind();
		Renderer2D.data.flatColorShader.uploadUniformMat4('u_Transform', transform);
		Renderer2D.data.flatColorShader.uploadUniformBuffer('ub_Material', Renderer2D.materialUBuffer);
		RendererCommand.drawIndexed(Renderer2D.data.quadVertexArray);
	}



	private static data: Renderer2DData;

	private static sceneData: SceneData;
	private static sceneDataUBuffer: UniformBuffer;
	private static materialUBuffer: UniformBuffer;
}


export default Renderer2D;
