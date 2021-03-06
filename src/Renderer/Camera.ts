import { mat4 as Mat4, vec3 as Vec3, glMatrix } from 'gl-matrix';


export class OrthographicCamera {
	private projectionMatrix = Mat4.create();
	private viewMatrix = Mat4.create();
	private viewProjectionMatrix = Mat4.create();

	private position = Vec3.create();
	private rotation = Vec3.create();

	constructor(left: number, right: number, bottom: number, top: number, near: number, far: number) {
		Mat4.ortho(this.projectionMatrix, left, right, bottom, top, near, far);

		Mat4.multiply(this.viewProjectionMatrix, this.projectionMatrix, this.viewMatrix);
	}

	public getViewProjectionMatrix = (): Mat4 => this.viewProjectionMatrix;
	public setViewProjection = (left: number, right: number, bottom: number, top: number, near: number, far: number): void => {
		Mat4.ortho(this.projectionMatrix, left, right, bottom, top, near, far);

		Mat4.multiply(this.viewProjectionMatrix, this.projectionMatrix, this.viewMatrix);
	}

	public getPosition = (): Vec3 => this.position;
	public setPosition = (position: Vec3): void => {
		this.position[0] = position[0];
		this.position[1] = position[1];
		this.position[2] = position[2];

		this.calculateViewMatrix();
	}

	public getRotation = (): Vec3 => this.rotation;
	public setRotation = (angle: Vec3): void => {
		this.rotation[0] = angle[0];
		this.rotation[1] = angle[1];
		this.rotation[2] = angle[2];

		this.calculateViewMatrix();
	}


	private calculateViewMatrix = (): void => {
		const transform = Mat4.create();

		Mat4.translate(transform, Mat4.create(), this.position);
		Mat4.rotateX(transform, transform, glMatrix.toRadian(this.rotation[0]));
		Mat4.rotateY(transform, transform, glMatrix.toRadian(this.rotation[1]));
		Mat4.rotateZ(transform, transform, glMatrix.toRadian(this.rotation[2]));
		Mat4.invert(this.viewMatrix, transform);

		Mat4.multiply(this.viewProjectionMatrix, this.projectionMatrix, this.viewMatrix);
	}
}


export class PerspectiveCamera {
	private projectionMatrix = Mat4.create();
	private viewMatrix = Mat4.create();
	private viewProjectionMatrix = Mat4.create();

	private position = Vec3.create();
	private rotation = Vec3.create();

	private fieldOfView: number;
	private near: number;
	private far: number;
	private aspectRatio: number;

	constructor(fieldOfView: number, near: number, far: number, aspectRatio: number) {
		this.fieldOfView = fieldOfView;
		this.near = near;
		this.far = far;
		this.aspectRatio = aspectRatio;

		Mat4.perspective(this.projectionMatrix,
			glMatrix.toRadian(this.fieldOfView),
			this.aspectRatio,
			this.near,
			this.far);
	}

	public getViewProjectionMatrix = (): Mat4 => this.viewProjectionMatrix;

	public getPosition = (): Vec3 => this.position;
	public setPosition = (position: Vec3): void => {
		this.position[0] = position[0];
		this.position[1] = position[1];
		this.position[2] = position[2];

		this.calculateViewMatrix();
	}

	public getRotation = (): Vec3 => this.rotation;
	public setRotation = (angle: Vec3): void => {
		this.rotation[0] = angle[0];
		this.rotation[1] = angle[1];
		this.rotation[2] = angle[2];

		this.calculateViewMatrix();
	}

	public setAspectRatio = (aspectRatio: number): void => {
		this.aspectRatio = aspectRatio;
		Mat4.perspective(this.projectionMatrix,
			glMatrix.toRadian(this.fieldOfView),
			this.aspectRatio,
			this.near,
			this.far);

		Mat4.multiply(this.viewProjectionMatrix, this.projectionMatrix, this.viewMatrix);
	}


	private calculateViewMatrix = (): void => {
		const transform = Mat4.create();

		Mat4.translate(transform, Mat4.create(), this.position);
		Mat4.rotateX(transform, transform, glMatrix.toRadian(this.rotation[0]));
		Mat4.rotateY(transform, transform, glMatrix.toRadian(this.rotation[1]));
		Mat4.rotateZ(transform, transform, glMatrix.toRadian(this.rotation[2]));
		Mat4.invert(this.viewMatrix, transform);

		Mat4.multiply(this.viewProjectionMatrix, this.projectionMatrix, this.viewMatrix);
	}
}
