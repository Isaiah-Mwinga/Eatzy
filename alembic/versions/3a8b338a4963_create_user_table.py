"""create user table

Revision ID: 3a8b338a4963
Revises: 
Create Date: 2023-06-08 10:56:49.069621

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3a8b338a4963'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    op.create_table(
        "user",
        sa.Column("id", sa.Integer, primary_key=True),
        sa.Column("name", sa.String(50), nullable=False),
        sa.Column("email", sa.String(50), nullable=False),
        sa.Column("password", sa.String(200), nullable=False),
        sa.Column("is_staff", sa.Boolean, default=False),
        sa.Column("is_active", sa.Boolean, default=False),
    )


def downgrade():
    op.drop_table("user")
